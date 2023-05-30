import Hero from "../componentes/hero"
import Carousel from "../componentes/Carousel"
export default function Index({data}) {
    return (
        <main className='absolute lg:relative w-screen' >
            <Hero />
            <Carousel character_photo={data[0].character_photo} cover_photo={data[0].cover_photo} name={data[0].name} description={data[0].description} />

        </main>
    )
}
