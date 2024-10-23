import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MdOutlineHomeWork } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleClick = () => {
    setIsOpen(false)
  }
  return (
    <div className='flex justify-between p-2 '>
      <Link to='/'>
        <Logo />
      </Link>
      <button className='text-3xl ' onClick={()=> setIsOpen(true)}>🍔</button>
      {
        isOpen && (
      <div className='fixed inset-0 bg-black z-10 bg-opacity-50 '>
        <div className="absolute flex flex-col gap-4 bg-white  inset-x-1/4 inset-y-1/3 p-3 shadow-lg rounded-md">
            <button className='fixed right-2  top-2 text-2xl bg-white py-2 px-4 rounded-full hover:text-red-500' onClick={handleClick}>X</button>
            <Link to='/companies' onClick={handleClick} className='flex  items-center gap-2 text-xl p-2 hover:bg-gray-200 rounded-md'><MdOutlineHomeWork /> Companies</Link>
            <Link to='/favorites' onClick={handleClick} className='flex  items-center gap-2 text-xl p-2 hover:bg-gray-200 rounded-md'><MdFavoriteBorder />Favorites</Link>
            <Link to='/login' onClick={handleClick} className='flex  items-center gap-2 text-xl p-2 hover:bg-gray-200 rounded-md'><FaRegUserCircle />Login</Link>
        </div>
      </div>
        )
      }


    </div>
  )
}

export default MobileNavbar