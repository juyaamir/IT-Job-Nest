
import DesktopNav from "./DesktopNav"
import MobileNavbar from "./MobileNavbar"

const Header = () => {
  return (
    <div>
        <div className='border-b border-gray-400  p-4 hidden md:block'>
          <DesktopNav />
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>

    </div>

  )
}

export default Header