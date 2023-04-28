
const STATUS = "A FAZER"

const Task = ({ title }: {title: string}) => {
    
    return (
        <div 
        className=" bg-white min-h-8 rounded-xl p-2 text-black flex flex-col justify-between text-left">
            <div>{ title }</div>
            <div className=" flex justify-between">
                <div></div>
                <div className="status">
                    { STATUS }
                </div>
            </div>
        </div>
    )
} 
export default Task;