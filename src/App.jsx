import { useState } from 'react'
import imagenMain from "./assets/images/background.svg"


import Navbar from './componentes/navbar'
import Hero from './componentes/hero'
import Carousel from './componentes/Carousel'
import Footer from './componentes/footer'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative flex flex-col items-center w-full h-full' >
        <img className='w-full h-[100%] lg:object-cover lg:object-top lg:absolute p-0' src={imagenMain} alt="image" />
        <Navbar />
        <Hero />
        <Carousel/>

        <Footer />

      </div>

    </>
  )
}

export default App
