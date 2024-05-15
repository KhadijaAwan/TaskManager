"use client";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { buttonStyle, flexCenter, inputStyle } from '@/components/style';
import { useTask } from '@/components/context';
import { useEffect, useState } from 'react';
import RemoveTasks from './removeTask';

type Task = {
    _id: string;
    detail: string;
};

export default function DisplayTasks() {
    const apiUrl = `/api/tasks`;
    const [totalTasks, setTotalTasks] = useState<Task[]>([]);
    const { postData, editTask, deleteTask } = useTask();

    useEffect(() => {
        const getTasks = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setTotalTasks(data.result || []);
            } catch (error) {
                console.error("Failed to get tasks:", error);
            }
        };

        getTasks();
    }, [editTask, postData, deleteTask]);

    const handleDetailChange = (id: string, newDetail: any) => {
        setTotalTasks(prevTasks =>
            prevTasks.map(task =>
                task._id === id ? { ...task, detail: newDetail } : task
            )
        );
    };

    return (
        <>
            {totalTasks.map((mainTask: any) => (
                <div className={`${flexCenter} mb-3`} key={mainTask._id}>
                    <input className={`${inputStyle} bg-slate-100 outline-none focus:outline-green-500 focus:bg-green-100`} value={mainTask.detail} onChange={(e) => handleDetailChange(mainTask._id, e.target.value)} aria-label="form-data" />
                    <div className="flex">
                        <button aria-label="update-task-button" className={`${buttonStyle} bg-green-500 hover:bg-green-600 px-2 mr-1`} onClick={() => editTask(mainTask)}>
                            <EditIcon className="text-[16px]" />
                        </button>
                        <button aria-label="delete-task-button" className={`${buttonStyle} bg-red-500 hover:bg-red-600 px-2`} onClick={() => deleteTask(mainTask._id)}>
                            <DeleteIcon className="text-[16px]" />
                        </button>
                    </div>
                </div>
            ))}

            <RemoveTasks totalTasks={totalTasks} />
        </>
    );
}
