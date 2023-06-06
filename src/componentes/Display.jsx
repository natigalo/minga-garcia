import React from "react"
export default function Display({show, setShow, options}) {
    return(
        <div className="absolute z-20 top-0 left-0 w-[200px] bg-indigo-700 h-full ">
            <h1 onClick={()=>setShow(!show)} >X</h1>
            <div>Home</div>
            <div>Mangas</div>
            <div>My Mangas</div>
            <div>Favorites</div>
            <div>Logout</div>
        </div>
    )
}

