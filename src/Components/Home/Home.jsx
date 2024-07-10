import React from 'react'
import video from '../Assets/video.png'
import stars from '../Assets/stars.png'
import right from '../Assets/right.png'
import fast from '../Assets/fast.png'
import './Home.css'

const Home = () => {
  return (
    <div className='homemain'>
        <div className='homeleft'>
            <div className='homebig'>
                <p id='homeh1'><strong>Provide the best <br /> solution to your <br /> problem</strong></p>
                <p id='homep'>We are a creative studio ready to <br /> create amazing and useful <br />products</p>
            </div>
            <div className='homebtns'>
                <button id='startbtn'><strong>Get Started</strong></button>
                <div><img src={video} alt="" id='video'/></div>
            </div>
            <div><img src={stars} alt="" id='stars' /></div>
        </div>
        <div className='homeright'>
            <img src={right} alt="" id='right'/>
            <div id='fast'><img src={fast} alt="" /></div>
        </div>
    </div>
  )
}

export default Home