import { Link } from "react-router-dom"
import { TbLogout  } from "react-icons/tb";
import { useState, useEffect } from "react"
import Logo from './Logo'
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { MdOutlineHomeWork, MdFavoriteBorder } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import axios from "axios";
const DesktopNav = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [myProfile, setMyProfile] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  };
  const handleIsOpen = () => {
    setIsOpen(false)
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
      }
    };

    getProfile();
  }, [navigate]);

  return (
    <div className="flex flex-wrap justify-between p-2">
        <Link to='/'><Logo />
        </Link>
        <div className="flex flex-wrap justify-between gap-6">
            <Link to='/' className="flex items-center gap-2 lg:text-xl"><FaSearch />Search Job</Link>
            <Link to='/companies' className="flex items-center gap-2 lg:text-xl"><MdOutlineHomeWork />Companies</Link>
            <Link to='/favorites' className="flex items-center gap-2 lg:text-xl"><MdFavoriteBorder />Favorites</Link>
            {
  !isAuthenticated ? (
    <Link to='/login' className="flex items-center gap-2 lg:text-xl text-gray-600 hover:text-green-600 transition-colors duration-200">
      <FaRegUserCircle className="text-2xl" />
      <span className="font-semibold">Login</span>
    </Link>
  ) : (
    <div className="relative flex flex-col items-center justify-center ">
      <button  
        onClick={toggleIsOpen} 
        className='flex items-center justify-center gap-2 lg:text-xl text-gray-700 hover:text-green-600 transition duration-200'>
       {/*  <FaRegUserCircle className='text-2xl' /> */}
        <span className='italic font-medium'>Hi, {myProfile?.name}</span>
      </button>
      {
        isOpen && (
          <div className='absolute top-10  -right-3 w-44 rounded-lg shadow-lg px-4 py-3 bg-white border border-gray-200 z-20'>
            <Link 
              onClick={handleIsOpen} 
              to='/my-account/dashboard' 
              className="flex items-center gap-1 py-2 text-gray-700 hover:scale-105 hover:text-green-600 transition-transform duration-150"><MdOutlineDashboardCustomize />
              Dashboard
            </Link>
            <Link 
              onClick={handleIsOpen} 
              to='/my-account/profile' 
              className="flex items-center gap-1 py-2 text-gray-700 hover:scale-105 hover:text-green-600 transition-transform duration-150"><ImProfile />
              Profile
            </Link>
            <Link 
              onClick={handleIsOpen} 
              to='/my-account/settings' 
              className="flex items-center gap-1  py-2 text-gray-700 hover:scale-105 hover:text-green-600 transition-transform duration-150"><IoSettingsOutline />
              Settings
            </Link>
            <button onClick={handleLogout} className='flex items-center justify-center gap-1 py-2 text-gray-700 hover:scale-105 hover:text-green-600 transition-transform duration-150 ' ><TbLogout className='text-2xl' />Logout</button>
          </div> 
        )
      }
    </div>
  )
}

            
          {/*   <Link to='/theme'>Theme</Link> */}
        </div>
    </div>
  )
}

export default DesktopNav