import Register from "../components/Register";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 p-4 w-full'>
        <Register />

        <div className="flex flex-col gap-4 mt-6 w-full px-4">
        <p className="text-center italic">Already an IT-Job-Nest member?</p>
        <p
        className="py-2 border border-green-600 text-green-600 w-full text-center hover:underline rounded-md"
        >
          <Link to='/login'>
          Login
          </Link>
        </p>
      </div>
    </div>
    
  )
}

export default RegisterPage