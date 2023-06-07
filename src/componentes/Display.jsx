import React from "react"
import photo from "/assets/images/logoUser.svg"
export default function Display({ show, setShow, options }) {
    return (
        <div className="absolute z-20 top-0 left-0 w-[300px] font-inter text-center text-white bg-indigo-700 h-full ">
            <div className="flex justify-around pt-5" >
                <img src={photo} alt="" />
                <div className="text-white text-left ">
                    <h1 className="font-semibold text-base">Lucas Ezequiel Silva</h1>
                    <h3 className="font-medium text-xs" >ashfaksayem@gmail.com</h3>
                </div>
                <h1 className="cursor-pointer text-sm" onClick={() => setShow(!show)} >X</h1>
            </div>
            <div className="flex text-left justify-between flex-col  h-80 mt-10 pl-5">
            <div className="hover:bg-white hover:text-indigo-500">Home</div>
            <div>Mangas</div>
            <div>My Mangas</div>
            <div>Favorites</div>
            <div>Logout</div>
            </div>
            
        </div>
    )
}

