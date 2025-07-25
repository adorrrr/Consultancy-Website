import React from 'react'
import Header from '../common/Header'
import Hero from '../../assets/images/heros.png'
import TrustFactor from '../common/TrustFactor'



const Home = () => {
  return (
    <>
        <main>
            <section className='section-1'>
                <Header/>
                <div className='hero d-flex align-items-center '>
                      <div className='text-left'>
                          <h1>AI Consulting. <br />Engineered for <br /> Tomorrow’s Triumph</h1>
                          <p className='mt-5'>We craft intelligent, adaptive solutions that drive efficiency, <br /> spark innovation, and scale impact—today and beyond.</p>
                          <div className='mt-5'>
                            <a className='btn btn-primary mx-2'>Contact Now</a>
                            <a className='btn btn-secondary ms-2'>View Projects</a>
                          </div>
                      </div>
                </div>
                
            </section>


            <section className='section-2'>
                <div className='partnered'>
                    <div className='Title'>
                        <h3>We have partnered with</h3>
                    </div>
                    <div className='PartneredIMG'>
                        <img src={Partnered} alt="" />
                    </div>
                </div>
            </section>
        </main>
        
    </>
  )
}

export default Home