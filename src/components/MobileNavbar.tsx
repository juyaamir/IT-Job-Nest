import Logo from './Logo'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { MdOutlineHomeWork, MdFavoriteBorder, MdManageAccounts } from "react-icons/md";
import { FaRegUserCircle, FaPlus, FaMinus, FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLogout, TbLogin2  } from "react-icons/tb";
import { RiCloseLargeLine } from "react-icons/ri";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const MobileNavbar = () => {
  const [myProfile, setMyProfile] = useState<any>(null);
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const { isAuthenticated } = useAuth();
  const [moreInfo, setMoreInfo] = useState(true);
  const handleClick = () => {
    setIsOpen(false)
  };

  const toggleInfo = () => {
    setMoreInfo(!moreInfo)
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsOpen(false);
    navigate('/login');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const getProfile = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_USER_PROFILE_API, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
       /*  console.log('Profile: ', res.data); */
        setMyProfile(res.data.profile);
      } catch (error) {
        console.error('Error: ', error);
/*         setError('An error occurred while trying to get your profile'); */
      }
    };

    getProfile();
  }, [navigate]);


  return (
    <div className='flex justify-between p-4 '>
      <Link to='/'>
        <Logo />
      </Link>
      <button className='text-3xl ' onClick={()=> setIsOpen(true)}><RxHamburgerMenu /></button>
      {
        isOpen && (
      <div className='fixed inset-0 bg-black z-10 bg-opacity-50 '>
        <div className="absolute flex flex-col  bg-white  inset-x-0 p-4 top-0 bottom-0 shadow-lg ">
          <div className='flex justify-between'>
            <Link to='/' onClick={handleClick}><Logo /></Link>
            <button className='fixed right-4 text-3xl top-4  bg-white rounded-full hover:text-red-500 ' onClick={handleClick}><RiCloseLargeLine /></button>
          </div>
          {
            isAuthenticated &&  (
              <>
              <p className='py-3 px-2 mt-4 flex items-center gap-2 border-t border-t-gray-300'><FaRegUserCircle className='text-2xl'/>Hello, <span className='italic'>{myProfile?.name}</span></p>
              <div className='  border-y border-y-gray-300 '>
              <div 
              onClick={toggleInfo}
              className='flex  items-center justify-between gap-2  hover:text-green-500  hover:cursor-pointer px-2 py-3 '>
                <p   className='flex items-center gap-2'><MdManageAccounts className='text-2xl' /> My Account</p> 
                {
                  moreInfo ? <FaPlus />: <FaMinus /> 
                }
              </div>
              {
                !moreInfo && (
                  <div className='flex flex-col gap-2 ml-6 myAccount p-2'>
                    <Link onClick={handleClick} to='/my-account/dashboard'>Dashboard</Link>
                    <Link onClick={handleClick} to='/my-account/profile'>Profile</Link>
                    <Link onClick={handleClick} to='/my-account/settings'>Settings</Link>
                  </div>)
              }
              </div>
              </>
            )
          }
          <Link to='/' onClick={handleClick} className='mobMenu'><FaSearch className='text-2xl'/> Search Job</Link>
            <Link to='/companies' onClick={handleClick} className='mobMenu  border-y border-y-gray-300'><MdOutlineHomeWork className='text-2xl' /> Companies</Link>
            <Link to='/favorites' onClick={handleClick} className='mobMenu '><MdFavoriteBorder className='text-2xl'/>Favorites</Link>
            {
              isAuthenticated ? (
                <button onClick={handleLogout} className='mobMenu border-y border-y-gray-300 ' ><TbLogout className='text-2xl' />Logout</button>
              ):(
                <Link to='/login' onClick={handleClick} className='mobMenu border-y border-y-gray-300' ><TbLogin2 className='text-2xl'/>Login</Link>
              )
            }   
        </div>
      </div>
        )
      }

    </div>
  )
}

export default MobileNavbar