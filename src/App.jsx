import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-96 bg-sky-200 flex'>
      <div className='w-1/2 h-64 bg-sky-700'></div>
    </div>

      <div className='w-full h-screen flex flex-col items-center justify-center'>
        
        <div className='flex bg-gray-500 p-20 w-11/12 bg-clip-border' >
          <a className='bg-red-800 m-5 p-16 hover:bg-sky-700' href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a className='bg-blue-600 p-16 m-5' href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div>
        
      </div>
      <span class="bg-clip-text blur-sm hover:brightness-150 text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
  Hello<br />
  World
</span>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
