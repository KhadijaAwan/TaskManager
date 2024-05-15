import AddTask from '@/components/addTask';
import DisplayTasks from '@/components/displayTasks';

export default function Home() {
  return (
    <main className="w-full bg-blue-500 py-60 md:py-[260px] xl:py-[180px] min-h-[100vh]">
      <div className="mx-auto w-[90%] md:w-[400px] lg:w-[480px] xl:w-[510px] bg-white rounded-md p-6 flex flex-col justify-center">
        <h1 className="font-medium text-xl mb-5">Todo App</h1>
        <AddTask />
        <DisplayTasks />
      </div>
    </main>
  );
}
