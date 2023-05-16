import { useState } from 'react'
import imagenMain from "./assets/images/Images + Rectangle.svg";
import logo from "./assets/images/Logo.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
<img className='absolute   right-12 top-12 h-16' src={logo} alt="logo" />
      </nav>
      <main>
        <div className='bg-blue-200 '>
          <img className='w-full p-0' src={imagenMain} alt="cards manga"/>
          <div className='d-flex'>For the love of manga
Explore our varieties
#MingaLove❤
</div>
        </div>
      </main>
      <footer></footer>

    </>
  )
}

export default App
