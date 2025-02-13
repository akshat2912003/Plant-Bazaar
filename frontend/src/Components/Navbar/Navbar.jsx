// import React, {useContext, useRef, useState} from 'react'
// import { Link } from 'react-router-dom';
// import './Navbar.css'
// import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
// import { PlantContext } from '../../Context/PlantContext';
// import nav_dropdown from '../Assets/nav_dropdown.png'
// const Navbar = () => {
//   const [menu, setMenu] = useState("shop")

//   //totalling total nu. of items in cart logo
//   const {getTotalCartItems} = useContext(PlantContext)

//   const menuRef = useRef();

//   const dropdown_toggle = (e) =>{
//     menuRef.current.classList.toggle('nav-menu-visible')
//     e.target.classList.toggle('open')
//   }

//   return (
//     <div className='navbar'>
//        <div className="nav-logo">
//         <img src={logo} alt="" />
//        </div>
//        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
//        <ul ref={menuRef} className="nav-menu">
//         {/* if click on shop underline comes shop and if on indoor then on it and soo on */}
//         <li onClick={()=>{setMenu("shop")}}> <Link to='/' style={{textDecoration: 'none'}} >Shop</Link> {menu==='shop'?<hr />:<></>}</li>
//         <li onClick={()=>{setMenu("indoor")}}><Link to='/indoor' style={{textDecoration: 'none'}} >Indoor Plants</Link> {menu==='indoor'?<hr />:<></>}</li>
//         <li onClick={()=>{setMenu("outdoor")}}><Link to='/outdoor' style={{textDecoration: 'none'}} >Outdoor plants</Link> {menu==='outdoor'?<hr />:<></>}</li>
//         <li onClick={()=>{setMenu("gift")}}><Link to='/gift' style={{textDecoration: 'none'}} >Seeds</Link> {menu==='gift'?<hr />:<></>}</li>
//         <li onClick={()=>{setMenu("about")}}><Link to='/about' style={{textDecoration: 'none'}} >About</Link> {menu==='about'?<hr />:<></>}</li>
//        </ul>
//        <div className="nav-login-cart">
//         {localStorage.getItem('auth-token')
//         ? <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button> : 
//         <Link to='/login'><button>Login</button></Link>}
       
//        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
//         <div className="nav-cart-count">{getTotalCartItems()}</div>
//        </div>
//     </div>
//   )
// }

// export default Navbar






import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { PlantContext } from '../../Context/PlantContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  // Totalling total number of items in cart logo
  const { getTotalCartItems } = useContext(PlantContext);

  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link to='/' style={{ textDecoration: 'none' }} >Shop</Link> {menu === 'shop' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("indoor") }}><Link to='/indoor' style={{ textDecoration: 'none' }} >Indoor Plants</Link> {menu === 'indoor' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("outdoor") }}><Link to='/outdoor' style={{ textDecoration: 'none' }} >Outdoor plants</Link> {menu === 'outdoor' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("gift") }}><Link to='/gift' style={{ textDecoration: 'none' }} >Seeds</Link> {menu === 'gift' ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("about") }}><Link to='/about' style={{ textDecoration: 'none' }} >About</Link> {menu === 'about' ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <SignedOut>
          <SignInButton>
            <button>Login</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;

