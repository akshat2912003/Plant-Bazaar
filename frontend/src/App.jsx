
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import PlantCategory from './Pages/PlantCategory'
import About from './Pages/About'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import indoor_banner from './Components/Assets/banner_indoor.png'
import outdoor_banner from './Components/Assets/banner_outdoor.png'
import gift_banner from './Components/Assets/banner_gift.png'
import Success from './Pages/Success'

function App() {
  return (
    <>
    <BrowserRouter>
    {/* navbar is outside routes because it will be common in all pages */}
      <Navbar />

      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/indoor' element={<PlantCategory banner={indoor_banner} category='indoor'/>}  />
        <Route path='/outdoor' element={<PlantCategory banner={outdoor_banner} category='outdoor'/>}  />
        <Route path='/gift' element={<PlantCategory banner={gift_banner} category='gift' />} />
        <Route path='/about' element={<About/>} />
        
        <Route path='/product' element={<Product/>} >
          <Route path=':productId' element={<Product/>} />
        </Route>

        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
        <Route path='/success' element={<Success/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
