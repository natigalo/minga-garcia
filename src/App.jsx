import { useState } from 'react'
import imagenMain from "./assets/images/background.svg"
import logo from "./assets/images/Logo.png"
import menu from "./assets/images/menu.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='relative flex flex-col items-center' >
      <img className='w-full h-full max-h-932px p-0' src={imagenMain} alt="image"/>
      
      <nav className='absolute flex justify-between w-full top-3 px-3'>
        <img className='  w-7  ' src={menu} alt="menu" />
        <img className=' w-7  ' src={logo} alt="logo" />
      </nav>

      <main className='absolute top-64 flex flex-col items-center text-white' >
          <div className=' font-roboto  text-center text-[40px] px-3 font-bold '>Your favorite comic book store ✨</div>
          <div className=' font-roboto text-center text-base px-3 pt-3' >From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</div>
        
      </main>
      <footer></footer>

    </div>
     
    </>
  )
}

export default App
