
// const STATUS = "A FAZER"

const Task = ({ title, status }: {title: string, status: string}) => {
    
    return (
        <div 
        className=" bg-white min-h-8 rounded-xl p-2 text-black flex flex-col justify-between text-left mb-4">
            <div>{ title }</div>
            <div className=" flex justify-between">
                <div></div>
                <div className="status">
                    { status }
                </div>
            </div>
        </div>
    )
} 
export default Task;