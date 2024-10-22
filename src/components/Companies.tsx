import companies from '../contents/companies.json'
import { GiTakeMyMoney } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from 'react-router-dom'
const Companies = () => {
  return (
    <div className='mt-10 border-t-2 border-t-green-500 pt-10'>
        <h1 className='font-bold text-xl md:text-2xl lg:text-3xl pb-2'>Some of the top IT Companies in Germany</h1>
        <p className='pb-2'>Find IT companies that perfectly match your needs</p>
        <div className='flex gap-4 flex-wrap'>
        {
            companies.map((company, index) => (
                <Link to={company.url} key={index} target='_blank'
                className='border border-gray-200 p-4 flex flex-col items-center bg-sky-400 bg-opacity-50
                gap-4 w-56 h-56 shadow-md hover:bg-opacity-70 hover:scale-105 rounded-md'
                >
                    
                <img src={company.logo} alt={company.name} 
                className='  object-contain'
                />
                <h2 className='text-2xl font-bold'>{company.name}</h2>
                <p className='flex justify-center items-center gap-1'><FaPeopleGroup /> { company.employees } employees</p>
                <p className='flex justify-center items-center gap-1'><GiTakeMyMoney /> { company.salary }</p>
                </Link>
            ))
        }
    </div>
    </div>
  )
}

export default Companies