import React from 'react'
import Partnered from '../../assets/images/Group 4.png'


const TrustFactor = () => {
  return (
    <section className='section-2'>
        <div className='partnered'>
            <div className='Title pb-5 text-capitalize'>
                <h3>We have partnered with</h3>
            </div>
            <div className='PartneredIMG'>
                <img src={Partnered} alt="" />
            </div>
        </div>
    </section>
  )
}

export default TrustFactor