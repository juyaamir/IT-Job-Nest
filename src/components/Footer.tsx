
import { Link } from 'react-router-dom'
import { footerLinks } from '../contents/footerData'

const Footer = () => {
  return (
      <footer className=' '>
        <div className='flex flex-wrap justify-around items-center border border-b-gray-300 p-1'>  
            <div className='flex gap-4 flex-wrap'> 
            <p className='flex items-center justify-center font-bold text-gray-600 '>Follow Us</p>
            {
              footerLinks.map((item) => (
                <Link key={item.path} to = {item.path} target='_blank' rel='noreferrer' className='hover:scale-125 duration-500 transition-transform  '>
                  <img src={item.source} alt={item.alt} className='h-10 w-10' />
                </Link>
              ))
            }
          </div>
        </div>
        <p className='text-sm md:text-lg text-center p-1'>&copy; 2024 | Designed & Coded with ❤️ by Amir Muhammad Juya</p>
      </footer>
  )
}

export default Footer