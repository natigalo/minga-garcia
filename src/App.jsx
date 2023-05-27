import { useState } from 'react'
import imagenMain from "./assets/images/background.svg"
import logo from "./assets/images/Logo.png"
import menu from "./assets/images/menu.svg"
import stars from "./assets/images/pngwing.com.png"
import person from "./assets/images/personaje.png"
import card from "./assets/images/card.png"
import buttonleft from "./assets/images/vectorLeft.png"
import buttonRight from "./assets/images/vectorRight.png"
import footer from "./assets/images/footer.svg"
import wave from "./assets/images/wave.png"
import logom from "./assets/images/logoFooter.svg"
import back_footer from "./assets/images/Background (1).svg"
import facebook from "./assets/images/facebook.svg"
import twitter from "./assets/images/twitter.svg"
import vimeo from "./assets/images/vimeo.svg"
import youtube from "./assets/images/Youtube.png"
import wave_white from "./assets/images/wave.svg"
import heart from "./assets/images/heart.png"
import line from "./assets/images/line.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative flex flex-col items-center w-full h-full' >
        <img className='w-full h-[100%] lg:object-cover lg:object-top lg:absolute p-0' src={imagenMain} alt="image" />

        <nav className='absolute flex justify-between w-full top-3 px-5'>
          <img className='  w-9  ' src={menu} alt="menu" />
          <img className=' w-9  ' src={logo} alt="logo" />
        </nav>

        <main className='absolute lg:relative w-screen' >
          <div className='flex flex-col lg:mt-[30%] mt-[60%] items-center justify-center text-white font-roboto text-center px-4' >

            <div className='text-[35px] md:text-[40px] font-bold '>Your favorite comic book store <img className='w-8 hidden md:inline' src={stars} alt="" /> </div>

            <div className=' lg:hidden text-center text-[16px] mx-16 pt-4' >From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</div>
            <div className=' hidden lg:inline text-center text-[16px]  pt-4' >Explore our catalog to live the adventure of your life</div>
            <button className='lg:hidden py-[18px] px-[130px] bg-gradient-to-r from-indigo-700 to-indigo-500 text-white font-bold text-[24px] mt-8  rounded-[120px] shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Started</button>
            <button className='hidden lg:inline rounded-md py-[20px] px-[140px] bg-gradient-to-r from-indigo-700 to-indigo-500  text-white font-bold text-[24px] mt-8  shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Let's go!</button>
          </div>

          <div className='hidden lg:inline-flex bg-white mt-[15%]  justify-center items-center w-full h-[380px]' >

            <div className='h-[265px] w-[80%] flex justify-between items-center rounded-md bg-gradient-to-r from-indigo-700 to-indigo-500'>
              <div className='ps-3'><img src={buttonleft} alt="" /></div>
              <div className=' mb-10  flex '><img className='w-[276px] h-[306px]' src={person} alt="person" /><img className='w-[180px] h-[270px]' src={card} alt="" /></div>
              <div className=" text-white w-[35%] h-[93px]  ">
                <div className='font-bold text-2xl font-roboto' >Shonen:</div>
                <div className='font-roboto text-sm  '>Is the manga that is aimed at adolescent boys.
                  They are series with large amounts of action,
                  in which humorous situations often occur.
                  The camaraderie between members of a collective or a combat team stands out.</div>
              </div>
              <div className='pr-3'><img src={buttonRight} alt="" /></div>
            </div>
          </div>

        </main>

        <footer className='w-[100%] relative flex-col flex bg-white '>


          <img className=' w-screen h-full ' src={wave} alt="" />
          <img className='absolute  mt-[10%]' src={wave_white} alt="" />


          <div className=' relative  flex flex-col justify-around'>

            <div className='flex flex-col lg:flex-row h-[250px] lg:h-full justify-between items-center mt-[4%] mx-[5%]'>
              <div className='font-poppins text-2xl'>
                <a className='p-7' href="#">Home</a>
                <a className='p-7' href="#">Mangas</a>
              </div>

              <img className='w-40 h-18 items-center justify-content' src={logom} alt="logo" />

              <div className='w-48 lg:w-[20%] flex flex-col'>
                <div className=' mb-2 flex justify-between '>
                  <img src={facebook} alt="logo facebook" />
                  <img src={twitter} alt="logo twitter" />
                  <img src={vimeo} alt="logo vimeo" />
                  <img src={youtube} alt="logo youtube" />
                </div>
                <a className='flex  justify-center rounded-full items-center w-full h-[43px] font-poppins bg-gradient-to-r from-indigo-700 to-indigo-500 text-white font-bold text-[16px]' href="">Donate <img className='ml-2' src={heart} alt="emoticon" /></a>
              </div>
            </div>

            <div className='  m-[4%] '>
              <img className='flex  w-[100%] ' src={line} alt="" />
            </div>
          </div>

        </footer>

      </div>

    </>
  )
}

export default App
