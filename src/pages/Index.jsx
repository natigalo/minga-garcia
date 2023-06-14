import Hero from "../componentes/hero"
import Carousel from "../componentes/Carousel"
import { useState } from "react"
import SignIn from "./SignIn"

export default function Index() {

    const [changeView, setChangeView] = useState(false)
    return (

        changeView ? (
            <>
            <SignIn changeView={changeView} setChangeView={setChangeView} />
        
            </>
            ): (
            <main className=' h-screen md:h-full md:relative w-full bg-[url("/assets/images/background.svg")] bg-cover bg-top' >
                <Hero />
                <Carousel  />

            </main>
            )


    )
}
