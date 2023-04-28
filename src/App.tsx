import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className=' flex flex-col items-center box-border p-12'>
        <h1 className=' text-6xl'>Kanban Tasks</h1>

      </main>
    </>
  )
}

export default App
