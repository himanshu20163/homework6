import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
         <h2>Logo</h2>
      </div>
      <div className='menubar'>
        <nav>
            <a id='menu_items' href='./Home' style={{color:"blue"}}>Home</a>
            <a id='menu_items' href='./About'>About </a>
            <a id='menu_items' href='./Contact'>Contact</a>
        </nav>
      </div>
      <div className='social'>
        <img id='menu_items' src='https://cdn-icons-png.flaticon.com/512/2175/2175193.png' height="18px" width="18px"></img>
        <img id='menu_items' src='https://cdn-icons-png.flaticon.com/512/733/733635.png' height="18px" width="18px"></img>
        <img id='menu_items' src='https://www.svgrepo.com/show/364604/instagram-logo-fill.svg' height="18px" width="18px"></img>
      </div>
    </div>
  )
}

export default Header
