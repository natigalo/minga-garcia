import { useState } from 'react'
import imagenMain from "/assets/images/background.svg"

import Main from './layouts/main'
import Index from './pages'

function App() {
  let data = [{
    name: 'Shonen: ',
    description: 'Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.',
    character_photo: "/assets/images/personaje.png",
    cover_photo: "/assets/images/card.png"
  }]

  return (
    <>
      <div className='relative flex flex-col items-center w-full h-full' >
        <img className='w-full h-[100%] lg:object-cover lg:object-top lg:absolute p-0' src={imagenMain} alt="image" />
        <Main>
        <Index data={data} />
        </Main>

      </div>

    </>
  )
}

export default App
