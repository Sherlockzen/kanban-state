import { useEffect, useState } from "react";
import Task from "./Task";

interface StateProp {
    state: string,
}

const tasksData = [
    {title: 'Comprar pão', status: 'A FAZER'},
    {title: 'Estudar React', status: 'A FAZER'},
    {title: 'Codar projeto de tasks', status: 'FAZENDO'},
    {title: 'Comprar marmita do almoço', status: 'TERMINADO'},
]

const Column = ({ state }: StateProp) => {
const [tasks, setTasks] = useState([{
    title: '',
    status: '',
}]);
    useEffect( () => {
        setTasks(tasksData);
    }, [tasksData] );

    // console.log(tasks);
    

    return (
        <div className=" bg-cyan-900 min-h-[30rem] min-w-[24rem] text-white text-center p-4">
            <p className=" mb-4">{ state }</p>
            
                <>
                    {
                        tasks.map((e) => e.status === state &&
                            <Task 
                                title={e.title} 
                                status={e.status}
                            />
                        )
                    }
                </>
            
        </div>
    )
}
export default Column;