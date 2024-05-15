"use client";
import AddIcon from '@mui/icons-material/Add';
import { buttonStyle, flexCenter, inputStyle } from '@/components/style';
import { useTask } from '@/components/context';

export default function AddTask() {
    const { task, setTask, postData } = useTask();

    return (
        <>
            <form onSubmit={(e) => postData(e)} className={`${flexCenter} mb-3`}>
                <input className={`${inputStyle} focus:outline-gray-500`} aria-label="form-data" value={task.detail} placeholder='Add your new todo' onChange={(e) =>
                    setTask((prevState) => ({
                        ...prevState,
                        detail: e.target.value,
                    }))
                } />
                <button type="submit" aria-label="add-task-button" className={`${buttonStyle} bg-purple-700 hover:bg-purple-800 font-bold px-2 mr-1`}>
                    <AddIcon className="text-[19px]" />
                </button>
            </form>
        </>
    );
}
