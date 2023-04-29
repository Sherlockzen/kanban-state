// import { useEffect, useState } from "react";
import Task from "./Task";
import { useStoreTasks, useTitleStore } from './store'
import { shallow } from "zustand/shallow";

interface StateProp {
  state: string;
}

// const tasksData = [
//   { title: "Comprar pão", status: "A FAZER" },
//   { title: "Estudar React", status: "A FAZER" },
//   { title: "Codar projeto de tasks", status: "FAZENDO" },
//   { title: "Comprar marmita do almoço", status: "TERMINADO" },
// ];

const Column = ({ state }: StateProp) => {
  const titleTask =  useTitleStore((
    (store) => store.title
  ))
  const allTasks = useStoreTasks(
    (store) => store.tasks,
    shallow
  )
  const tasks = useStoreTasks(
    (store) => store.tasks.filter((task) => task.status === state),
    shallow
  )
  const updateTaskStore = useStoreTasks(
    (store) => store.update
  );
  
  const handleOnDrop = () => {
    updateTaskStore(titleTask, state);
    console.log('dropou');
  };

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  }

  // console.log(tasks);
  
  return (
    <div onDrop={handleOnDrop} onDragOver={handleOnDragOver} className=" bg-cyan-900 min-h-[30rem] min-w-[24rem] text-white text-center p-4">
      <p className=" mb-4">{state}</p>

      <>
        {tasks.map(
          (e) =>
            e.status === state && <Task title={e.title} status={e.status} />
        )}
      </>
    </div>
  );
};
export default Column;
