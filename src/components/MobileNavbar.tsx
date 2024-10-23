import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MdOutlineHomeWork } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleClick = () => {
    setIsOpen(false)
  }
  return (
    <div className='flex justify-between p-4 '>
      <Link to='/'>
        <Logo />
      </Link>
      <button className='text-3xl ' onClick={()=> setIsOpen(true)}><RxHamburgerMenu /></button>
      {
        isOpen && (
      <div className='fixed inset-0 bg-black z-10 bg-opacity-50 '>
        <div className="absolute flex flex-col  bg-white  inset-x-0 top-0 bottom-0 p-3 shadow-lg ">
          <div className='flex justify-between mb-4'>
            <Link to='/' onClick={handleClick}><Logo /></Link>
            <button className='fixed right-2  top-2 text-2xl bg-white py-2 px-4 rounded-full hover:text-red-500 ' onClick={handleClick}>X</button>
          </div>
          <Link to='/' onClick={handleClick} className='flex  items-center gap-2 text-xl  px-2 py-3 hover:bg-gray-200  border-y border-y-gray-300'><FaSearch /> Search Job</Link>
            <Link to='/companies' onClick={handleClick} className='flex  items-center gap-2 text-xl  px-2 py-3 hover:bg-gray-200  border-y border-y-gray-300'><MdOutlineHomeWork /> Companies</Link>
            <Link to='/favorites' onClick={handleClick} className='flex  items-center gap-2 text-xl  px-2 py-3 hover:bg-gray-200 '><MdFavoriteBorder />Favorites</Link>
            <Link to='/login' onClick={handleClick} className='flex  items-center gap-2 text-xl  px-2 py-3 hover:bg-gray-200 border-y border-y-gray-300' ><FaRegUserCircle />Login</Link>
        </div>
      </div>
        )
      }


    </div>
  )
}

export default MobileNavbar