import Task from "./Task";

interface StateProp {
    state: string,
}

const Column = ({ state }: StateProp) => {

    return (
        <div className=" bg-cyan-900 min-h-[30rem] min-w-[24rem] text-white text-center p-4">
            <p className=" mb-4">{ state }</p>
            <Task title="Teste" />
        </div>
    )
}
export default Column;