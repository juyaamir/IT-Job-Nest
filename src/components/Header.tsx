
import DesktopNav from "./DesktopNav"
import MobileNavbar from "./MobileNavbar"

const Header = () => {
  return (
    <div>
        <div className='border-b border-gray-300  p-4 hidden md:block'>
          <DesktopNav />
        </div>
        <div className="md:hidden border-b border-gray-300 ">
          <MobileNavbar />
        </div>

    </div>

  )
}

export default Header