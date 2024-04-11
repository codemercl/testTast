export interface Task {
    id: number;
    title: string;
}

export interface UseTaskHandler {
    tasks: Task[];
    newTaskTitle: string;
    setNewTaskTitle: React.Dispatch<React.SetStateAction<string>>;
    saveTask: (e: React.FormEvent<HTMLFormElement>) => void;
    handleDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
    handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDrop: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
}