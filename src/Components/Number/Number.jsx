import React from 'react'
import './Number.css'
import str from '../Assets/str.png'

const Number = () => {
    return (
        <div className='numbermain'>
            <div className='numbers'>
                <div className='num1'>
                    <p id='numh1'>120k +</p>
                    <h3 id='numh3'>Happy Customers</h3>
                </div>
                <div><img src={str} alt="" id='str'/></div>
                <div className='num1'>
                    <p id='numh1'>550+</p>
                    <h3 id='numh3'>Project</h3>
                </div>
                <div><img src={str} alt="" id='str' /></div>
                <div className='num1'>
                    <p id='numh1'>75+</p>
                    <h3 id='numh3'>Companies worked togther</h3>
                </div>
            </div>
            <div className='num2'>
                <p>Creative studio that provides solutions to <br />customer problems regarding creative digital <br />needs</p>
            </div>
        </div>
    )
}

export default Number