import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiEdit } from "react-icons/fi"

interface ApiData {
  name: string;
  email: string;
  password: string;
}

const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState<ApiData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Get token from local storage
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found. Please log in.');
      return;
    }

    // Get data from backend
    const getProfile = async () => {
      try {
        const response = await axios.get<{ profile: ApiData }>(`${import.meta.env.VITE_USER_PROFILE_API}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      /*   console.log(response.data); */
        setProfileData(response.data.profile);
        setError(null); // Clear any previous errors
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Error:', error.response?.data);
          setError(error.response?.data.message || 'Failed to fetch profile data.');
        } else {
          console.error('An unexpected error occurred');
          setError('An unexpected error occurred. Please try again later.');
        }
      }
    };

    getProfile();
  }, []);

  return (
    <div className="profile-container">
      <div className='flex gap-8'>
      <div className='flex flex-col text-center w-44 justify-center items-center p-2'>
        <img src='' alt="image" className='h-28 w-28 rounded-full ' />
        <div className='flex gap-2 '>
          <h4 className='font-bold'> { profileData?.name} </h4>
          <button onClick={() => setIsEditing(true)} title='Change profile photo' className='text-xl hover:text-orange-400'> <FiEdit /></button>
        </div>
        
      </div>
      <div className='border border-gray-400 p-2'>
        <h1 className='font-bold '>Your Profile</h1>
        <p>Your profile preferences help us personalize recommendations for you</p>
      </div>
    </div>
    {
      isEditing && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 '>
          <div className='bg-white border border-gray-300 p-4 w-96 shadow-lg rounded-md'>
            <h1 className='font-bold mb-4'>Edit profile picture</h1>
          <div>
            <input type="file" title='upload your profile' />
          </div>
          <div className='flex justify-end mt-2'>
          <button className='bg-blue-500 text-white rounded px-4 py-2 mr-2'>Update</button>
          <button className='bg-gray-300 px-4 py-2 mr-2 rounded ' onClick={()=> setIsEditing(false)}>Cancel</button>
            
          </div>
          </div>
        </div>
      )
    }
    </div>
  );
};

export default Profile;