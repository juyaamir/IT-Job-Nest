import { Link } from "react-router-dom"
import Logo from './Logo'
import { MdOutlineHomeWork } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const DesktopNav = () => {

  return (
    <div className="flex flex-wrap justify-between p-2">
        <Link to='/'><Logo />
        </Link>
        <div className="flex flex-wrap justify-between gap-6">
            <Link to='/companies' className="flex items-center gap-2 lg:text-xl"><FaSearch />Search Job</Link>
            <Link to='/companies' className="flex items-center gap-2 lg:text-xl"><MdOutlineHomeWork />Companies</Link>
            <Link to='/favorites' className="flex items-center gap-2 lg:text-xl"><MdFavoriteBorder />Favorites</Link>
            <Link to='/login' className="flex items-center gap-2 lg:text-xl"><FaRegUserCircle/>Login</Link>
          {/*   <Link to='/theme'>Theme</Link> */}
        </div>
    </div>
  )
}

export default DesktopNav