import React from 'react'
import './Footer.css'
import log from '../Assets/log.png'

const Footer = () => {
    return (
        <div className='footermain'>
            <div className='ftop'>
                <div className='f1'>
                    <div><img src={log} alt="" id='log' /></div>
                    <p id='fp'>Dynamix@gmail.com</p>
                    <p id='fp'>2020 Massachusetts Ave <br /> NW, Washington, DC 20036</p>
                </div>
                <div className='fmid'>
                    <div className='f2'>
                        <h3>Service</h3>
                        <p>UI/UX Design</p>
                        <p>Development</p>
                        <p>Illustration</p>
                        <p>Annimation</p>
                    </div>
                    <div className='f2'>
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Career</p>
                        <p>Merch</p>
                    </div>
                    <div className='f2'>
                        <h3>Social</h3>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Youtube</p>
                        <p>Facebook</p>
                    </div>
                </div>
                <div className='f3'>
                    <h3>Get updates from us</h3>
                    <div className='flast'>
                        <input type="text" placeholder='Your email' id='fip' />
                        <button id='sub'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='fbot'>
                <p id='fbotp'>©2023 Dynamix. All rights reserved</p>
                <div className='fbot1'>
                    <p>Terms & Condditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer