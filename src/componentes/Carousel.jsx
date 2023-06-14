import buttonleft from "/assets/images/vectorLeft.png"
import buttonRight from "/assets/images/vectorRight.png"
import { useEffect, useState } from "react"
import apiUrl from "../apiUrl"
import axios from "axios"

export default function Carousel() {
  const [categories, setCategories] = useState([])
  useEffect(
    () => {
      axios(apiUrl + '/categories').then((res) => { setCategories(res.data.response) }).catch((err) => console.log(err))
    },
    []// si el array esta vacio el efecto se ejecuta por 1 unica vez cuando el componente se monta, si el array tiene algunas variables el efecto se va a ejecutar cada que se modifique el valor de esos parametros
  )
  const [counter, setCounter] = useState(0)
  const right = () => {
    setCounter(counter + 1);
    if (counter == categories.length - 1) {
      setCounter(0)
    }
    console.log(counter);
  }
  const left = () => {
    setCounter(counter - 1);
    if (counter == 0) {
      setCounter(categories.length - 1)
    }
    console.log(counter);
  }
  return (
    <div className='hidden md:inline-flex bg-white mt-[15%]  justify-center items-center w-full h-[380px]' >

      <div className='h-[265px] w-[80%] flex justify-between items-center rounded-md ' style={{ background: categories[counter]?.color }}>
        <div className='ps-3'><img onClick={left} src={buttonleft} alt="" /></div>
        <div className=' mb-10  flex '><img className='w-[276px] h-[306px]' src={categories[counter]?.character_photo} alt="person" /><img className='w-[180px] h-[270px]' src={categories[counter]?.cover_photo} alt="" /></div>
        <div className=" text-white w-[35%] h-[93px]">
          <div className='font-bold text-2xl font-roboto' >{categories[counter]?.name.toUpperCase()}</div>
          <div className='font-roboto text-sm  '>{categories[counter]?.description}</div>
        </div>
        <div className='pr-3'><img onClick={right} src={buttonRight} alt="" /></div>
      </div>
    </div>
  )
}