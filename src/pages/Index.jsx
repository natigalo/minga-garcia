import Hero from "../componentes/hero"
import Carousel from "../componentes/Carousel"
import { useState } from "react"
import SignIn from "./SignIn"
export default function Index({ data }) {
    const [changeView, setChangeView] = useState(false)
    return (

        changeView ? (
            <SignIn changeView={changeView} setChangeView={setChangeView} />
        ): (<main className='absolute lg:relative w-screen' >
                <Hero changeView={changeView} setChangeView={setChangeView}/>
                <Carousel character_photo={data[0].character_photo} cover_photo={data[0].cover_photo} name={data[0].name} description={data[0].description} />

            </main>)


    )
}
