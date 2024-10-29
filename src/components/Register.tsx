import { useState } from "react"

import axios from 'axios'
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState<String>('');
    const [message, setMessage] = useState<String>('');

  
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    };

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:8000/users/v1/register`, formData);
            setMessage(response.data.message);
            console.log(response.data);
        } catch (err: any) {
           if(err instanceof Error) {
            console.log(err.message);
            setError(err.message)
        } else {
            console.log("An unexpected error occurred");
        }   
        }
        setFormData({
            name: '',
            email: '',
            password: ''
        })
    };
    if(error) {
        <div className="text-red-500 font-bold">{error}</div>
    }

return (
    <div className='flex justify-center items-center mt-20 p-4'>

    <form
    onSubmit={handleSubmit} 
    className='w-full border border-gray-300 flex items-center justify-center flex-col p-4 gap-3 rounded-lg shadow-lg'
    >
        {
            message && <p className="text-blue-500 font-bold">{message}</p>
        }
        {
            error && (
                <p className="text-red-400">{error}</p>
            )
        }
        <input type="text"
        placeholder='Your name'
        name='name'
        onChange={handleChange}
        value={formData.name}
        className='border border-gray-300 rounded-md p-2 w-full md:w-96'
        />
        <input type="email"
        placeholder='Your email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        className='border border-gray-300 rounded-md p-2 w-full md:w-96'
        />
        <input type="password" placeholder='Your password...' 
        value={formData.password}
        onChange={handleChange}
        className='border border-gray-300 rounded-md p-2 w-full md:w-96'
        name='password'
        />
        <button
        className='border border-gray-300 rounded-md p-2 w-full md:w-96 px-4 py-2'
        type='submit'
        >Register</button>
    </form>
    </div>
)
}

export default Register