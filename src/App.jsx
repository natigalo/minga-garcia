import { useState } from 'react'
import imagen from "./assets/images/Images + Rectangle.svg";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>

      </nav>
      <main>
        <div className='w-100'>
          <img className='bg-cover' src={imagen} alt=""/>
        </div>
      </main>
      <footer></footer>

    </>
  )
}

export default App
