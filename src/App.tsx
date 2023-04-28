import Column from './Column'

function App() {

  return (
    <>
      <main className=' flex flex-col items-center box-border p-12 h-screen'>
        <h1 className=' text-5xl mb-10'>Kanban Tasks</h1>
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
