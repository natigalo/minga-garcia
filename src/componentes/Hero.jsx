import stars from "/assets/images/pngwing.com.png"
import { Link as Anchor } from "react-router-dom"

export default function Hero( ) {
  return (
    
    <div className='flex flex-col lg:mt-[30%] mt-[60%] items-center justify-center text-white font-roboto text-center px-4' >

            <div className='text-[35px] md:text-[40px] font-bold '>Your favorite comic book store <img className='w-8 hidden md:inline' src={stars} alt="" /> </div>

            <div className=' lg:hidden text-center text-[16px] mx-16 pt-4' >From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</div>
            <div className=' hidden lg:inline text-center text-[16px]  pt-4' >Explore our catalog to live the adventure of your life</div>
            <Anchor to={'/signin'} className='lg:hidden py-[18px] px-[130px] bg-gradient-to-r from-indigo-700 to-indigo-500 text-white font-bold text-[24px] mt-8  rounded-[120px] shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Started</Anchor>
            <Anchor to={'/signin'} className='hidden lg:inline rounded-md py-[20px] px-[140px] bg-gradient-to-r from-indigo-700 to-indigo-500  text-white font-bold text-[24px] mt-8  shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Let's go!</Anchor>
          </div>
  )
}
