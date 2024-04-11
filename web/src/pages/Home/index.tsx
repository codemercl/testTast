import { FaSearch } from "react-icons/fa";
import { Form, Layout, List } from "../../components";
import { useTaskHandler } from "./hooks/useTaskHandler";

export function Home() {
  const { tasks, newTaskTitle, setNewTaskTitle, saveTask, handleDragStart, handleDragOver, handleDrop } = useTaskHandler();

  return (
    <Layout>
      <Form.Group onSubmit={saveTask}>
        <Form.Field
          icon={<FaSearch />}
          name="task"
          placeholder="Enter task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <Form.Button type="submit">Add task</Form.Button>
      </Form.Group>

      <List.Wrapper>
        {tasks.map((task, index) => (
          <List.Group
            key={task.id}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, task.id)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, index)}
          >
            <List.Title>{task.id} {task.title}</List.Title>
          </List.Group>
        ))}
      </List.Wrapper>
    </Layout>
  );
}
