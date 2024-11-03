import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
interface IForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<IForm>({
    email: "",
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(import.meta.env.VITE_USER_LOGIN_API, formData);
      console.log(response.data);
      console.log(response.data.token);

      //save to localStorage
      localStorage.setItem("token",response.data.token);
      setIsAuthenticated(true);
      setMessage(response.data.message);
      setError(null); // Clear any previous errors
      setTimeout(() => {
        navigate('/');
      }, 4000);
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        console.error("Error:", err.response?.data);
        setError(err.response?.data.message || "Unauthorized access. Please check your credentials.");
      } else {
        console.error("An unexpected error occurred");
        setError("An unexpected error occurred. Please try again later.");
      }
    }

    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='border border-gray-300 flex items-center justify-center flex-col p-4 gap-3 rounded-lg shadow-lg w-full form-width'
    >
      {message && (
        <p className="text-blue-400 italic">{message}</p>
      )}
      {error && (
        <p className="text-red-400 italic">{error}</p>
      )}
      <input
        type="email"
        placeholder='Your email'
        onChange={handleChange}
        name='email'
        value={formData.email}
        className='border border-gray-300 rounded-md w-full md:w-96 px-4 py-2'
      />
      <input
        type="password"
        placeholder='Your password...'
        className='border border-gray-300 rounded-md p-2 w-full md:w-96 px-4 py-2'
        name='password'
        value={formData.password}
        onChange={handleChange}
      />
      <button
        className='border border-gray-300 rounded-md p-2 w-full md:w-96 px-4 py-2 bg-green-600 text-white font-semibold hover:bg-green-700'
        type='submit'
      >
        Login
      </button>
    </form>
  );
};

export default Login;