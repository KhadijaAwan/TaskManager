import { buttonStyle, flexCenter } from '@/components/style';
import { useTask } from '@/components/context';
import { NextPage } from 'next';

interface removeProps {
    totalTasks: any
}

const RemoveTasks: NextPage<removeProps> = ({ totalTasks }) => {
    const { deleteAllTasks } = useTask();

    return (
        <div className={`${flexCenter} flex-col md:flex-row mt-4`}>
            <p>You have {totalTasks.length} pending {totalTasks.length > 1 ? "tasks" : "task"}</p>
            <button className={`${buttonStyle} bg-purple-700 hover:bg-purple-800 font-semibold px-3 mt-5 md:mt-0`} onClick={() => deleteAllTasks()}>Clear All</button>
        </div>
    );
}

export default RemoveTasks;