import Navbar from "../componentes/navbar"
import Footer from "../componentes/footer"
import { Outlet } from "react-router-dom"

export default function Main() {
    return (
        
      <div className=' flex flex-col items-center w-full h-full' >
    
            <Navbar />
            <Outlet/>
            <Footer />
        </div>
    )
}
