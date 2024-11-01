import { useState, useEffect } from 'react';
import axios from 'axios';

interface ApiData {
  name: string;
  email: string;
  password: string;
}

const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState<ApiData | null>(null);
  const [error, setError] = useState<string | null>(null);

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
        const response = await axios.get<{ profile: ApiData }>('http://localhost:8000/users/v1/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
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
      {error && <p className="text-red-400 italic">{error}</p>}
      {profileData ? (
        <div>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
        </div>
      ) : (
        !error && <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default Profile;