import Column from './Column'
import NewTask from './NewTask'

function App() {

  return (
    <>
      <main className=' flex flex-col items-center box-border p-12 h-screen'>
        <div className=' text-5xl mb-10 navbar bg-primary rounded-xl text-neutral-content'>Kanban Tasks</div>
        <NewTask />
        <div id='kabanboard' className=' flex gap-12'>
          <Column state='A FAZER' />
          <Column state='FAZENDO' />
          <Column state='TERMINADO' />
        </div>
      </main>
    </>
  )
}

export default App
