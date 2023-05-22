import { useState } from 'react'
import imagenMain from "./assets/images/background.svg"
import logo from "./assets/images/Logo.png"
import menu from "./assets/images/menu.svg"
import stars from "./assets/images/pngwing.com.png"
import footer from "./assets/images/footer.svg"
import wave from "./assets/images/wave.png"
import logom from "./assets/images/logom.png"
import inga from "./assets/images/inga.png"
import back_footer from "./assets/images/Background (1).svg"
import facebook from "./assets/images/facebook.svg"
import twitter from "./assets/images/twitter.svg"
import vimeo from "./assets/images/vimeo.svg"
import youtube from "./assets/images/Youtube.png"
import wave_white from "./assets/images/wave_gray.svg"
import line from "./assets/images/line.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative flex flex-col items-center w-full h-full' >
        <img className='w-full h-full p-0' src={imagenMain} alt="image" />

        <nav className='absolute flex justify-between w-full top-3 px-3'>
          <img className='  w-7  ' src={menu} alt="menu" />
          <img className=' w-7  ' src={logo} alt="logo" />
        </nav>

        <main className='absolute  w-screen' >
          <div className='flex flex-col lg:mt-[30%] mt-[60%] items-center justify-center text-white font-roboto text-center px-4' >

            <div className='text-[35px] md:text-[40px] font-bold '>Your favorite comic book store <img className='w-8 hidden md:inline' src={stars} alt="" /> </div>

            <div className=' lg:hidden text-center text-[16px] mx-16 pt-4' >From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</div>
            <div className=' hidden lg:inline text-center text-[16px]  pt-4' >Explore our catalog to live the adventure of your life</div>
            <button className='lg:hidden py-[20px] px-[140px] bg-[#4338CA] text-white font-bold text-[24px] mt-8  rounded-[120px] shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Started</button>
            <button className='hidden lg:inline rounded-md py-[20px] px-[140px] bg-[#4338CA] text-white font-bold text-[24px] mt-8  shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Let's go!</button>
          </div>

          <div className='bg-white lg:mt-[14%] absolute w-screen h-[380px]' >
            <div className='h-[265px] w-80 bg-[#4338CA] '>

hol
            </div>
          </div>

        </main>

        <footer >

          <div className=" relative flex bg-gray-100 w-full ">
            <img className=' w-full h-screen ' src={footer} alt="" />
            <img className='absolute h-screen ' src={wave_white} alt="" />
          </div>

          <div className='flex w-full flex-col md:flex-row h-[300px] justify-between items-center'>
            <div>

            </div>
            <div className='font-poppins text-2xl'>
              <a className='p-8' href="#">Home</a>
              <a className='p-8' href="#">Mangas</a>
            </div>


            <div className='flex ' >
              <img className='w-20 h-18 items-center justify-content' src={logom} alt="logo" />
              <img className='w-20 h-18' src={inga} alt="logo" />
            </div>

            <div>
              <div className='flex'>
                <img src={facebook} alt="logo facebook" />
                <img src={twitter} alt="logo twitter" />
                <img src={vimeo} alt="logo vimeo" />
                <img src={youtube} alt="logo youtube" />
              </div>

            </div>

          </div>
          <img className='absolute px-8' src={line} alt="" />


        </footer>

      </div>

    </>
  )
}

export default App
