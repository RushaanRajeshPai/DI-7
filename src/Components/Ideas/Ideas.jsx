import React from 'react'
import './Ideas.css'
import brown from '../Assets/brown.png'
import arrow from '../Assets/arrow.png'
import mar from '../Assets/mar.png'
import teal from '../Assets/teal.png'

const Ideas = () => {
    return (
        <div className='idmain'>
            <h1 id='idh1'>Pour in your ideas for us to <br /> give the best touch</h1>
            <div className='identire'>
                <div className='idleft'>
                    <div><img src={brown} alt="" id='brown' /></div>
                    <p id='idp1'>UI / UX Design</p>
                    <p id='idp2'>Create display designs for mobile applications, <br />websites and dashboards. </p>
                    <div className='idinterior'>
                        <p id='idp3'><strong>Learn More</strong></p>
                        <div><img src={arrow} alt="" id='arrow' /></div>
                    </div>
                </div>
                <div className='idright'>
                    <div className='idup'>
                        <div><img src={mar} alt="" id='mar' /></div>
                        <div className='idup2'>
                            <p id='idp1a'>Illustration</p>
                            <p id='idp2a'>Provide a touch with beautiful <br />illustrations that pamper and fulfill <br />your needs</p>
                            <div className='idinteriora'>
                                <p id='idp3a'><strong>Learn More</strong></p>
                                <div><img src={arrow} alt="" id='arrow1' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='iddown'>
                        <div className='iddownleft'>
                            <p id='idp1b'>Graphic <br /> Design</p>
                            <p id='idp2a'>Create all types of graphic designs <br />to company branding</p>
                            <div className='idinteriorb'>
                                <p id='idp3'><strong>Learn More</strong></p>
                                <div><img src={arrow} alt="" id='arrow2' /></div>
                            </div>
                        </div>
                        <div className='iddownright'>
                        <p id='idp1b'>3D <br /> Design</p>
                            <p id='idp2a'>Making 2 dimensions into three <br />dimensions which creates reality</p>
                            <div className='idinteriorb'>
                                <p id='idp3'><strong>Learn More</strong></p>
                                <div><img src={teal} alt="" id='arrow2' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ideas