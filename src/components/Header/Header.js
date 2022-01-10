import React from 'react'
import './Header.css'
import { Logo } from '../imports'

function Header() {
    return (
        <div className='header'>
            <img src={Logo}/>
            <div className='navbar' id='home'>
                <a href='#home' className='active'>Home</a>
                <a href='#features'>Features</a>
                <a href='#pricing'>Pricing</a>
                <a href='#blog'>Blog</a>
            </div>
            <button>Get Started</button>
        </div>
    )
}

export default Header
