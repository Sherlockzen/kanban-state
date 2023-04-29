import { useTitleStore } from './store';


const Task = ({ title, status }: {title: string, status: string}) => {
    const stateStore = useTitleStore().update
    return (
        <div 
        draggable
        onDragStart={() => stateStore(title)}
        className=" bg-white min-h-8 rounded-xl p-2 text-black flex flex-col justify-between text-left mb-4 cursor-pointer">
            <div>{ title }</div>
            <div className=" flex justify-between">
                <div></div>
                {
                    status === "A FAZER" &&
                    <div className={"status badge badge-info p-4 items-center"}>
                        <div>{ status }</div>
                    </div>
                }
                {
                    status === "FAZENDO" &&
                    <div className={"status badge badge-warning p-4 items-center"}>
                        <div>{ status }</div>
                    </div>
                }
                {
                    status === "TERMINADO" &&
                    <div className={"status badge badge-success p-4 items-center"}>
                        <div>{ status }</div>
                    </div>
                }
            </div>
        </div>
    )
} 
export default Task;