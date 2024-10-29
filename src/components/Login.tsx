import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

interface IForm {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState<IForm>({
    email: "",
    password: ''
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
    const {name, value} = e.target;
    setFormData({
      ...formData, [name]: value
    })
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/users/v1/login', formData);  
      console.log(response.data);
      setMessage(response.data.message);
    } catch (error) {
      if(error instanceof Error) {
        console.log(`Error: ${error}`)
      } else {
        console.log(`An unexpected error`)
      }
    };

    setFormData({
      email: '',
      password: ''
    });

    setTimeout(()=> {
      navigate('/');
    }, 4000);
  }


  return (
    <form 
      onSubmit={handleSubmit}
      className='border border-gray-300 flex items-center justify-center flex-col p-4 gap-3 rounded-lg shadow-lg w-full'
      >
        {
          message && (
            <p className="text-blue-400 italic  ">{message}</p>
          )
        }
        <input type="email"
        placeholder='Your email'
        onChange={handleChange}
        name='email'
        value={formData.email}
        className='border border-gray-300 rounded-md w-full md:w-96 px-4 py-2'
        />
        <input type="password" placeholder='Your password...' 
        className='border border-gray-300 rounded-md p-2 w-full md:w-96 px-4 py-2'
        name='password'
        value={formData.password}
        onChange={handleChange}
        />
        <button
        className='border border-gray-300 rounded-md p-2 w-full md:w-96 px-4 py-2 bg-green-600 text-white font-semibold hover:bg-green-700'
        type='submit'
        >Login</button>
      </form>
  )
}

export default Login