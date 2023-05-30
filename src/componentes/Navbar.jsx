import logo from "/assets/images/Logo.png"
import menu from "/assets/images/menu.svg"

export default function Navbar() {
  return (
    <nav className='absolute flex justify-between w-full top-3 px-5'>
    <img className='  w-9  ' src={menu} alt="menu" />
    <img className=' w-9  ' src={logo} alt="logo" />
  </nav>
  )
}
