import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'

const Navbar = () => {
    return (
        <div className='navbarmain'>
            <div className='navleft'>
                <div><img src={logo} alt="" id='logo' /></div>
                <div className='navp'>
                    <p id='navp1'>Home</p>
                    <p id='navp2'>Service</p>
                    <p id='navp3'>Projects</p>
                    <p id='navp4'>Testimonial</p>
                    <p id='navp5'>About</p>
                </div>
            </div>
            <div className='navright'>
                <button id='logbtn'>Log In</button>
                <button id='signbtn'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar