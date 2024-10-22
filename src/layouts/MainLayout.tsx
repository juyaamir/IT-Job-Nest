import AppRoutes from '../routes/AppRoutes'
import Header from '../components/Header'
import Footer from '../components/Footer'
const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col '>
        <Header />
        <div className='flex-grow'>
            <AppRoutes />
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout