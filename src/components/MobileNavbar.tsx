import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false)
  return (
    <div className='flex justify-between p-2 '>
      <Link to='/'>
        <Logo />
      </Link>
      <button className='text-3xl ' onClick={()=> setIsOpen(true)}>🍔</button>
      {
        isOpen && (
      <div className='inset-0 bg-black absolute z-10 bg-opacity-50'>
        <div className="flex flex-col gap-4 bg-white fixed top-0 bottom-1/2 left-0 right-1/2 p-3 shadow-lg rounded-md">
            <button className='fixed right-2 text-2xl bg-white py-2 px-4 rounded-full ' onClick={()=> setIsOpen(false)}>X</button>
            <Link to='/companies'>Companies</Link>
            <Link to='/favorites'>Favorites</Link>
            <Link to='/login'>Login</Link>
        </div>
      </div>
        )
      }


    </div>
  )
}

export default MobileNavbar