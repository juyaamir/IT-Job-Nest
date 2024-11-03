import Login from "../components/Login"
import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 p-4 w-full'>
      <Login />
      <div className="flex flex-col gap-4 mt-6 w-full md:w-96">
        <p className="text-center italic">Not Joined IT-Job-Nest yet?</p>
        <p
        className="py-2 border border-green-600 text-green-600 w-full md:w-96 text-center hover:underline rounded-md"
        >
          <Link to='/register'>
          Register now free of Charge
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage