import React from "react"
import photo from "/assets/images/logoUser.svg"
import x from "/assets/images/x.svg"
export default function Display({ show, setShow, options }) {
    return (
        <div className="absolute z-20 top-0 left-0 w-full lg:w-[320px] font-inter text-center  bg-indigo-700 h-full ">
            <div className="flex justify-around pt-6 px-[1%]" >
                <img src={photo} alt="" />
                <div className="text-white text-left ">
                    <h1 className="font-semibold text-base">Lucas Ezequiel Silva</h1>
                    <h3 className="font-medium text-xs text-[#D1D3D4]" >ashfaksayem@gmail.com</h3>
                </div>
                <img src={x} alt="x" className="cursor-pointer text-sm" onClick={() => setShow(!show)}/>
                
            </div>
            <div className="flex text-left justify-between flex-col text-white h-[200px] mt-6 px-[10%] lg:px-5">
            <div className="hover:bg-white hover:text-indigo-500 rounded-md mx-2 p-1 items-center text-md">Home</div>
            <div className="hover:bg-white hover:text-indigo-500 rounded-md mx-2 p-1 items-center text-md">Mangas</div>
            <div className="hover:bg-white hover:text-indigo-500 rounded-md mx-2 p-1 items-center text-md">My Mangas</div>
            <div className="hover:bg-white hover:text-indigo-500 rounded-md mx-2 p-1 items-center text-md">Favorites</div>
            <div className="hover:bg-white hover:text-indigo-500 rounded-md mx-2 p-1 items-center text-md">Logout</div>
            </div>
            
        </div>
    )
}

