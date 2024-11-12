import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { PlantContext } from '../../Context/PlantContext';
const Navbar = () => {
  const [menu, setMenu] = useState("shop")

  //totalling total nu. of items in cart logo
  const {getTotalCartItems} = useContext(PlantContext)

  return (
    <div className='navbar'>
       <div className="nav-logo">
        <img src={logo} alt="" />
       </div>
       <ul className="nav-menu">
        {/* if click on shop underline comes shop and if on indoor then on it and soo on */}
        <li onClick={()=>{setMenu("shop")}}> <Link to='/' style={{textDecoration: 'none'}} >Shop</Link> {menu==='shop'?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("indoor")}}><Link to='/indoor' style={{textDecoration: 'none'}} >Indoor Plants</Link> {menu==='indoor'?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("outdoor")}}><Link to='/outdoor' style={{textDecoration: 'none'}} >Outdoor plants</Link> {menu==='outdoor'?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("gift")}}><Link to='/gift' style={{textDecoration: 'none'}} >Gift Section</Link> {menu==='gift'?<hr />:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link to='/about' style={{textDecoration: 'none'}} >About</Link> {menu==='about'?<hr />:<></>}</li>
       </ul>
       <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ? <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button> : 
        <Link to='/login'><button>Login</button></Link>}
       
       <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
       </div>
    </div>
  )
}

export default Navbar
