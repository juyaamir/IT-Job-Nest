import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { MdOutlineHomeWork } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLogout, TbLogin2  } from "react-icons/tb";
import { RiCloseLargeLine } from "react-icons/ri";
const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [moreInfo, setMoreInfo] = useState(true);
  const handleClick = () => {
    setIsOpen(false)
  };

  const toggleInfo = () => {
    setMoreInfo(!moreInfo)
  };


  return (
    <div className='flex justify-between p-4 '>
      <Link to='/'>
        <Logo />
      </Link>
      <button className='text-3xl ' onClick={()=> setIsOpen(true)}><RxHamburgerMenu /></button>
      {
        isOpen && (
      <div className='fixed inset-0 bg-black z-10 bg-opacity-50 '>
        <div className="absolute flex flex-col  bg-white  inset-x-0 top-0 bottom-0 p-6 shadow-lg ">
          <div className='flex justify-between mb-4'>
            <Link to='/' onClick={handleClick}><Logo /></Link>
            <button className='fixed right-2  top-2 text-2xl bg-white py-2 px-4 rounded-full hover:text-red-500 ' onClick={handleClick}>X</button>
          </div>
          {
            isAuthenticated && (
              <>
              <p className='p-2 flex items-center gap-2'><FaRegUserCircle className='text-2xl'/>Hello, <span className='italic'>Amir Juya</span></p>
              <div className='  border-y border-y-gray-300 '>
              <div 
              onClick={toggleInfo}
              className='flex  items-center justify-between gap-2 text-xl hover:text-green-500  hover:cursor-pointer px-2 py-3 '>
                <p   className='flex items-center gap-2'><MdManageAccounts className='text-2xl' /> My Account</p> 
                {
                  moreInfo ? <FaPlus />: <FaMinus /> 
                }
              </div>
            
              {
                !moreInfo && (
                  <div className='flex flex-col gap-2 ml-6 myAccount p-2'>
                    <Link  to='/dashboard'>Dashboard</Link>
                    <Link to='/profile'>Profile</Link>
                    <Link to='/setting'>Settings</Link>
                  </div>)
              }
              </div>
              </>

            )
          }
          <Link to='/' onClick={handleClick} className='mobMenu'><FaSearch /> Search Job</Link>
            <Link to='/companies' onClick={handleClick} className='mobMenu  border-y border-y-gray-300'><MdOutlineHomeWork className='text-2xl' /> Companies</Link>
            <Link to='/favorites' onClick={handleClick} className='mobMenu '><MdFavoriteBorder className='text-2xl'/>Favorites</Link>
            {
              isAuthenticated ? (
                <Link to='/login' onClick={handleClick} className='mobMenu border-y border-y-gray-300' ><TbLogout className='text-2xl' />Logout</Link>
              ):(
                <Link to='/login' onClick={handleClick} className='mobMenu border-y border-y-gray-300' ><TbLogin2 className='text-2xl'/>Login</Link>
              )
            }
            
{/*             <Link to='/register' onClick={handleClick} className='flex  items-center gap-2 text-xl  px-2 py-3 hover:bg-gray-200 border-y border-y-gray-300' >Register</Link> */}
        
        </div>
      </div>
        )
      }


    </div>
  )
}

export default MobileNavbar