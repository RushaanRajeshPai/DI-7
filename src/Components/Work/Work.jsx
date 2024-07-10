import React from 'react'
import './Work.css'
import arr from '../Assets/arr.png'

const Work = () => {
    return (
        <div className='workmain'>
            <div className='worktop'>
                <h1>Said those who have <br />worked with us</h1>
                <div><img src={arr} alt="" id='arr'/></div>
            </div>
            <div className='workdown'>
                <div className='work1'>
                    <p id='wp'>I am very satisfied with the service <br /> provided. Completing the job precisely <br /> even beyond expectations <br /> Thankyou Dynamix</p>
                    <h4 id='wh4'>Janson Alindra</h4>
                    <p id='wp1'>CEO Spotify</p>
                </div>
                <div className='work1'>
                    <p id='wp'>I am very satisfied with the service <br /> provided. Completing the job precisely <br /> even beyond expectations <br /> Thankyou Dynamix</p>
                    <h4 id='wh4'>Victoria Dishta </h4>
                    <p id='wp1'>PM Google </p>
                </div>
                <div className='work1'>
                    <p id='wp'>I am very satisfied with the service <br /> provided. Completing the job precisely <br /> even beyond expectations <br /> Thankyou Dynamix</p>
                    <h4 id='wh4'>Alex Young </h4>
                    <p id='wp1'>Manager Discord </p>
                </div>
            </div>
        </div>
    )
}

export default Work