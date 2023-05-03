// import { useEffect, useState } from "react";
import Task from "./Task";
import { useStoreTasks, useTitleStore } from './store'
import { shallow } from "zustand/shallow";

interface StateProp {
  state: string;
}

const Column = ({ state }: StateProp) => {
  const titleTask =  useTitleStore((
    (store) => store.title
  ))
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

  return (
    <div onDrop={handleOnDrop} onDragOver={handleOnDragOver} className=" min-h-[30rem] min-w-[24rem] text-white text-center card bg-neutral shadow-xl">
      <div className=" card-body">
        <h2 className=" card-title self-center">{state}</h2>
        {tasks.map(
          (e) =>
            e.status === state && <Task key={e.title} title={e.title} status={e.status} />
        )}
      </div>

    </div>
  );
};
export default Column;
