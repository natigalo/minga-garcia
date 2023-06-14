import Display from "./display"
import logo from "/assets/images/Logo.png"
import menu from "/assets/images/menu.svg"
import { useState } from "react"

export default function Navbar() {
  let options = [
    { to: '/', title: 'Home' },
    { to: '/register', title: 'Register'},
    { to: '/signin', title: 'Sign In'}] 
  const [show, setShow] = useState(false)
  return (
    <>
      {show && <Display show={show} setShow={setShow} options={options} />}
      <nav className='absolute z-10 flex justify-between w-full top-3 px-5'>
        <img className='  w-9 cursor-pointer  ' onClick={() => setShow(!show)} src={menu} alt="menu" />
        <img className=' w-9  ' src={logo} alt="logo" />
      </nav>
    </>

  )
}
