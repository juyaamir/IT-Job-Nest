import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiSignOutBold } from "react-icons/pi";
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

interface ProfileData {
  name: string;
  email: string;
  // Add other profile fields as needed
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [error, setError] = useState<string>('');
  const [myProfile, setMyProfile] = useState<ProfileData | null>(null);

  const handleSignOut = () => {
    navigate('/');
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('You are not authorized to view this page');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      return;
    }

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
        setError('An error occurred while trying to get your profile');
      }
    };

    getProfile();
  }, [navigate]);

  if (error) {
    return <p className='text-red-500 text-center'>{error}</p>;
  }

  if (!myProfile) {
    return <p className='text-center'>Loading...</p>;
  }

  return (
    <div className='text-xl relative group'>
      <p className='px-4 py-2 hover:cursor-pointer'>Hi, {myProfile.name}</p>
      <div className='border border-gray-400 w-96 p-6 rounded absolute'>
        <div className='flex gap-2 p-2 bg-cyan-300 rounded'>
          <img src='' alt='' className='h-12 w-12 border-blue-400 border rounded-full' />
          <p className='flex flex-col'>
            <span className='font-bold text-base'>{myProfile.name}</span>
            <span className='text-sm'>Thanks for being an IT-Job-Nest Member</span>
          </p>
        </div>
{/*         <div className='flex justify-between text-base py-4 dashboard-list'>
          <ul className='font-semibold flex flex-col gap-3'>
            <li>
              <button className='flex items-center gap-2' onClick={handleSignOut}>
                <PiSignOutBold className='text-xl' /> <span>Sign Out</span>
              </button>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;