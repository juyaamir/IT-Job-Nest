import Companies from "../pages/companiesPage"
import Home from "../pages/Home"
import Favorites from "../pages/Favorites"
import Theme from "../pages/Theme"
import { Routes, Route } from "react-router-dom"
import LoginPage from '../pages/loginPage'
import RegisterPage from "../pages/registerPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/companies' element={<Companies />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/theme' element={<Theme />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default AppRoutes