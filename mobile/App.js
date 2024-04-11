import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBhnuv-p1veXZ5EK5YCFsfQAkAmoFSRDLk",
  authDomain: "testtask-6e9d3.firebaseapp.com",
  databaseURL: "https://testtask-6e9d3-default-rtdb.firebaseio.com/",
  projectId: "testtask-6e9d3",
  storageBucket: "testtask-6e9d3.appspot.com",
  messagingSenderId: "207792569704",
  appId: "1:207792569704:web:889c92f94c20e1a12eeadd"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default function App() {
  const [data, setData] = useState([{ key: 'item-2', id: 3, title: 'three position' }]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const tasksRef = ref(db, "test/tasks");

    onValue(tasksRef, (snapshot) => {
      const tasksData = snapshot.val();
      if (tasksData) {
        const tasksArray = Object.keys(tasksData).map((key) => ({
          key: `item-${key}`,
          ...tasksData[key]
        }));
        console.log(tasksArray, 'tasksArray');
        setData(tasksArray);
      } else {
        setData([]);
      }
    });

    return () => { };
  }, []);
  console.log(data, 'data');
  const addItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        key: `item-${data.length}`,
        label: inputValue.trim(),
      };
      setData([...data, newItem]);
      setInputValue("");

      saveTask(newItem.label);
    }
  };

  const saveTask = (newTaskTitle) => {
    const tasksRef = ref(db, "test/tasks");
    const newTaskRef = push(tasksRef);
    let maxId = 0;
    data.forEach((task) => {
        if (task.id > maxId) {
            maxId = task.id;
        }
    });
    const newId = maxId + 1;
    
    set(newTaskRef, {
      title: newTaskTitle,
      id: newId,
    })
      .then(() => {
        console.log("Data saved successfully");
      })
      .catch((error) => {
        console.error("Error: " + error.message);
      });
  };

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={[
            styles.rowItem,
            { backgroundColor: isActive ? "red" : item.backgroundColor },
          ]}
        >
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  const getRandomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter new item"
        />
        <Button title="Add Item" onPress={addItem} />
      </View>

      <DraggableFlatList
        data={data && data}
        onDragEnd={({ data }) => setData(data)}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  rowItem: {
    height: 100,
    width: '100%',
    marginTop: "10px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    fontSize: "14px",
    backgroundColor: "rgba(51, 51, 51, 0.05)",
    color: "333333",
    fontWeight: "500"
  },
  text: {
    color: "black",
  },
});
