interface StateProp {
    state: string,
}

const Column = ({ state }: StateProp) => {

    return (
        <div className=" bg-cyan-900 min-h-[30rem] min-w-[24rem] text-white text-center">{ state }</div>
    )
}
export default Column;