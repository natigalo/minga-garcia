import wave from "/assets/images/wave.png"
import logom from "/assets/images/logoFooter.svg"
import facebook from "/assets/images/facebook.svg"
import twitter from "/assets/images/twitter.svg"
import vimeo from "/assets/images/vimeo.svg"
import youtube from "/assets/images/Youtube.png"
import wave_white from "/assets/images/wave.svg"
import heart from "/assets/images/heart.png"
import line from "/assets/images/line.png"

export default function Footer() {
    return (
        <footer className='w-[100%] relative flex-col flex bg-white '>

            <img className=' hidden lg:inline w-screen h-full ' src={wave} alt="" />
            <img className='hidden lg:inline absolute  mt-[10%]' src={wave_white} alt="" />

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
    )
}

