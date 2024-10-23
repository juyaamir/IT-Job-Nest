import Companies from "../pages/companiesPage"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Favorites from "../pages/Favorites"
import Theme from "../pages/Theme"
import { Routes, Route } from "react-router-dom"
const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/companies' element={<Companies />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/login' element={<Login />} />
      <Route path='/theme' element={<Theme />} />
    </Routes>
  )
}

export default AppRoutes