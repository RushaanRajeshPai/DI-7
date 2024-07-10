import React from 'react'
import './Services.css'
import a from '../Assets/a.png'

const Services = () => {
  return (
    <div className='servicesmain'>
        <h1>Get the best service from us for <br />your problems</h1>
        <p id='servp'>Always providing the best service for you from us</p>
        <div className='serviceboxes'>
            <div className='servbox1'>
                <div><img src={a} alt="" id='a'/></div>
                <h2 id='servh2'>Structured Performance</h2>
                <p id='servp1'>We always use a good and correct <br />structural system from stage to stage. <br />We always prepare everything well.</p>
            </div>
            <div className='servbox1'>
                <div><img src={a} alt="" id='a'/></div>
                <h2 id='servh2'>Manage a good team </h2>
                <p id='servp1'>We and the team will collaborate well <br /> divisions. Prioritize communication <br /> so you don't misunderstand</p>
            </div>
            <div className='servbox1'>
                <div><img src={a} alt="" id='a'/></div>
                <h2 id='servh2'>Best quality work </h2>
                <p id='servp1'>Always prioritize the integrity of the <br />team which strives to produce the best <br /> products for customer satisfaction.</p>
            </div>
        </div>
    </div>
  )
}

export default Services