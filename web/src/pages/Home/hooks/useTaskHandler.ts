import { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue, Database } from "firebase/database";
import { app } from "../../../main";
import { Task, UseTaskHandler } from "../types";

export function useTaskHandler(): UseTaskHandler {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState<string>("");

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
        e.dataTransfer.setData("text/plain", id.toString());
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const updateTaskOrder = (newTasks: Task[]) => {
        setTasks(newTasks);
        const db: Database = getDatabase(app);
        set(ref(db, "test/tasks"), newTasks);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.preventDefault();
        const draggedItemId = parseInt(e.dataTransfer.getData("text/plain"), 10);
        const draggedItem = tasks.find((task) => task.id === draggedItemId);
        if (!draggedItem) return;
        const newTasks = tasks.filter((task) => task.id !== draggedItemId);
        newTasks.splice(index, 0, draggedItem);
        updateTaskOrder(newTasks);
    };

    const saveTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const db: Database = getDatabase(app);
        let maxId = 0;
        tasks.forEach((task) => {
            if (task.id > maxId) {
                maxId = task.id;
            }
        });
        const newId = maxId + 1;
        const newTaskRef = push(ref(db, "test/tasks"));
        set(newTaskRef, {
            id: newId,
            title: newTaskTitle,
        })
            .then(() => {
                alert("Data saved successfully");
                setNewTaskTitle("");
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });
    };

    useEffect(() => {
        const db: Database = getDatabase(app);
        const tasksRef = ref(db, "test/tasks");

        onValue(tasksRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const tasksArray = Object.keys(data).map((key) => ({ id: Number(key), ...data[key] })) as Task[];
                setTasks(tasksArray);
            } else {
                setTasks([]);
            }
        });

        return () => { };
    }, []);

    return { tasks, newTaskTitle, setNewTaskTitle, saveTask, handleDragStart, handleDragOver, handleDrop };
}