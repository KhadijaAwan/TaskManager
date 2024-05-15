"use client";
import { useRouter } from 'next/navigation';
import { ReactNode, createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

interface TaskContextType {
    task: {
        detail: string;
    };
    setTask: React.Dispatch<React.SetStateAction<{
        detail: string;
    }>>;
    postData: (e: any) => void;
    editTask: (updatedTask: any) => void;
    deleteTask: (id: string) => void;
    deleteAllTasks: () => void;
}

const TaskContext = createContext<TaskContextType>({
    task: {
        detail: "",
    },
    setTask: () => { },
    postData: (e: any) => { },
    editTask: (updatedTask: any) => { },
    deleteTask: (id: string) => { },
    deleteAllTasks: () => { },
});

export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const apiUrl = "http://localhost:3000/api/tasks";
    const [task, setTask] = useState({
        detail: "",
    });

    const postData = async (e: any) => {
        e.preventDefault();
        try {
            let response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task),
            });
            response = await response.json();
            setTask({ detail: "", });
            router.refresh();
        } catch (error) {
            console.error("Failed to add the task: ", error);
        }
    };

    const deleteTask = async (id: string) => {
        try {
            let response = await fetch(apiUrl, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id })
            });

            response = await response.json();
            router.refresh();
        } catch (error) {
            console.error("Failed to delete task:", error);
        }
    };

    const deleteAllTasks = async () => {
        try {
            let response = await fetch("http://localhost:3000/api/totalTasks", {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            response = await response.json();
            router.refresh();
        } catch (error) {
            console.error("Failed to delete all tasks:", error);
        }
    };

    const editTask = async (updatedTask: any) => {
        try {
            let response = await fetch(apiUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedTask),
            });

            response = await response.json();
            toast.success('Task Updated Successfully');
            router.refresh();
        } catch (error) {
            console.error("Failed to update the task: ", error);
        }
    };


    return (
        <TaskContext.Provider value={{
            task, setTask, postData, deleteTask, editTask, deleteAllTasks,
        }}>
            {children}
        </TaskContext.Provider>
    );
};