import { useState } from 'react'
import imagenMain from "./assets/images/background.svg"
import logo from "./assets/images/Logo.png"
import menu from "./assets/images/menu.svg"
import stars from "./assets/images/pngwing.com.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative flex flex-col items-center w-full h-full' >
        <img className='w-full h-full sm:bg-cover bg-center p-0' src={imagenMain} alt="image" />

        <nav className='absolute flex justify-between w-full top-3 px-3'>
          <img className='  w-7  ' src={menu} alt="menu" />
          <img className=' w-7  ' src={logo} alt="logo" />
        </nav>

        <main className='absolute top-64 flex flex-col items-center text-white font-roboto text-center px-4' >
          <div className='flex'>
            <div className='text-[35px] md:text-[40px] font-bold '>Your favorite comic book store <img className='w-8 inline invisible md:visible ' src={stars} alt="" /> </div>
          </div>
          <div className='  text-center text-[16px]  pt-4' >From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</div>
          <button className='py-[20px] px-[140px] bg-[#4338CA] text-white font-bold text-[24px] mt-8  rounded-[120px] shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Started</button>
        </main>
        <footer></footer>

      </div>

    </>
  )
}

export default App
