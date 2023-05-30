import buttonleft from "/assets/images/vectorLeft.png"
import buttonRight from "/assets/images/vectorRight.png"

export default function Carousel({character_photo, cover_photo, name, description}){
    return (
        <div className='hidden lg:inline-flex bg-white mt-[15%]  justify-center items-center w-full h-[380px]' >

        <div className='h-[265px] w-[80%] flex justify-between items-center rounded-md bg-gradient-to-r from-indigo-700 to-indigo-500'>
          <div className='ps-3'><img src={buttonleft} alt="" /></div>
          <div className=' mb-10  flex '><img className='w-[276px] h-[306px]' src={character_photo} alt="person" /><img className='w-[180px] h-[270px]' src={cover_photo} alt="" /></div>
          <div className=" text-white w-[35%] h-[93px]  ">
            <div className='font-bold text-2xl font-roboto' >{name}</div>
            <div className='font-roboto text-sm  '>{description}</div>
          </div>
          <div className='pr-3'><img src={buttonRight} alt="" /></div>
        </div>
      </div>
    )
}