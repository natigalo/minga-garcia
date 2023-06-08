import React from "react"
import photo from "/assets/images/logoUser.svg"
import x from "/assets/images/x.svg"
export default function Display({ show, setShow, options }) {
    return (
        <div className="absolute z-20 top-0  left-0 w-full md:w-[320px]  font-inter text-center  bg-indigo-700 h-full ">
            <div className="flex justify-around pt-6 px-[1%]" >
                <img src={photo} alt="" />
                <div className="-ml-10 text-white font-inter text-[15px] text-left ">

                    <h1 className="font-semibold text-base">Lucas Ezequiel Silva</h1>
                    <h3 className="font-medium text-xs text-[#D1D3D4]" >ashfaksayem@gmail.com</h3>
                </div>
                <img src={x} alt="x" className="cursor-pointer text-sm" onClick={() => setShow(!show)} />

            </div>
            <div className="flex text-left font-inter justify-between flex-col text-white h-[200px] mt-6 px-[10%] lg:px-5">
                <div className="hover:bg-white hover:text-indigo-500 rounded-md mx-2 p-1 items-center text-md">Home</div>
                <div className="hover:bg-white hover:text-indigo-500 rounded-md mx-2 p-1 items-center text-md">Mangas</div>
                <div className="hover:bg-white hover:text-indigo-500 rounded-md mx-2 p-1 items-center text-md">My Mangas</div>
                <div className="hover:bg-white hover:text-indigo-500 rounded-md mx-2 p-1 items-center text-md">Favorites</div>
                <div className="hover:bg-white hover:text-indigo-500 rounded-md mx-2 p-1 items-center text-md">Logout</div>
            </div>

        </div>
    )
}
/* 
<div className="items-center w-full text-white md:w-[420px] p-2 rounded-xl absolute z-20 top-0 left-0 bg-indigo-700 flex flex-col h-full">
      <div className="w-[100%]">
        <div className="ps-[24px] pr-[29px] mt-[10%] flex justify-around">
          <div className="flex w-full">
            <img
              src={login}
              className="h-[46px] w-[46px] rounded-full"
              alt=""
            />
            <div className="flex flex-col ms-1">
              <p className="font-inter text-[15px]">
                Robinson Gerardo Aguirre Duque
              </p>
              <p className="font-inter text-[12px]">xerarduDev@gmail.com</p>
            </div>
          </div>
          <h1
            onClick={() => setShow(!show)}
            className="w-[14px] h-[14px] hover:cursor-pointer"
          >
            X
          </h1>
        </div>
        <div className="items-center ps-[24px] mt-5 pr-[24px]">
          <li className="rounded-[8px] p-2 list-none h-[48px] hover:bg-white hover:text-indigo-700 hover:font-bold">
            <a href="">Home</a>
          </li>
          <li className="rounded-[8px] p-2 list-none h-[48px] hover:bg-white hover:text-indigo-700 hover:font-bold">
            <a href="">Mangas</a>
          </li>
          <li className="rounded-[8px] p-2 list-none h-[48px] hover:bg-white hover:text-indigo-700 hover:font-bold">
            <a href="">My Mangas</a>
          </li>
          <li className="rounded-[8px] p-2 list-none h-[48px] hover:bg-white hover:text-indigo-700 hover:font-bold">
            <a href="">Favorites</a>
          </li>
          <li className="rounded-[8px] p-2 list-none h-[48px] hover:bg-white hover:text-indigo-700 hover:font-bold">
            <a href="">Logout</a>
          </li>
        </div>
      </div>
    </div>
 */
