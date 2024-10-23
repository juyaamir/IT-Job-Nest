import { Link } from "react-router-dom"
import Logo from './Logo'

const DesktopNav = () => {

  return (
    <div className="flex flex-wrap justify-between p-2">
        <Link to='/'><Logo />
        </Link>
        <ul className="flex flex-wrap justify-between gap-4">
            <li><Link to='/companies'>Companies</Link></li>
            <li><Link to='/favorites'>Favorites</Link></li>
            <li><Link to='/login'>Login</Link></li>
          {/*   <li><Link to='/theme'>Theme</Link></li> */}
        </ul>
    </div>
  )
}

export default DesktopNav