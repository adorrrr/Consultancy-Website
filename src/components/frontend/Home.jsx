import React from 'react'
import Header from '../common/Header'
import Hero from '../../assets/images/heros.png'
import Target from '../../assets/images/Target.png'
import Vector1 from '../../assets/images/Vector (1).png'
import Vector2 from '../../assets/images/Vector (2).png'
import Vector3 from '../../assets/images/Settings.png'
import Vector4 from '../../assets/images/Vector (3).png'
import Vector5 from '../../assets/images/Vector (4).png'
// import Vector5 from '../../assets/images/Vector (5).png'
import TrustFactor from '../common/TrustFactor'
import Partner from '../../assets/images/portrait-smiling-young-man 2.png'


const Home = () => {
  return (
    <>
        <main>
            <section className='section-1'>
                <Header/>
                <div className='hero d-flex align-items-center '>
                      <div className='text-left'>
                          <h1>AI Consulting. <br />Engineered for <br /> Tomorrow’s Triumph</h1>
                          <p className='mt-5 text-capitalize'>We craft intelligent, adaptive solutions that drive efficiency, <br /> spark innovation, and scale impact—today and beyond.</p>
                          <div className='mt-5'>
                            <a className='btn btn-primary mx-2'>Contact Now</a>
                            <a className='btn btn-secondary ms-2'>View Projects</a>
                          </div>
                      </div>
                </div>
                <img src={Hero} alt="" className='heroimg' />
            </section>

            <TrustFactor />
            
        </main>

        <section className='section-3'>
            <div className='component'>
                <div className='con-item d-flex mb-5'>
                    <div className='text-con'>
                        <h2>Your Trusted Partner <br />For Sustainable Growth</h2>
                        <p className='text-capitalize'>We know every business is unique — that’s why we craft <br />personalized strategies that make AI practical, scalable, and <br />impactful for the real world.</p>
                        <a href="" className='btn btn-black mt-2'>Learn More About Us</a>
                    </div>
                    <div>
                        <img src={Partner} alt="" />
                    </div>
                </div>
                <div class="hero-stats">
                  <div class="stat-item">
                    <h2>20+</h2>
                    <p>Years Of Industry Experience</p>
                  </div>
                  <div class="stat-item">
                    <h2>100+</h2>
                    <p>Global Businesses Served</p>
                  </div>
                  <div class="stat-item">
                    <h2>$90M+</h2>
                    <p>Business Value Generated</p>
                  </div>
                  <div class="stat-item">
                    <h2>98%</h2>
                    <p>Client Satisfaction Rate</p>
                  </div>
                </div>
            </div>
        </section>
        

        <section className='section-4'>
            <div className='servies'>
                <div className='servies-heading-contant'>
                    <h2>What We Can Do for Your Business</h2>
                    <p>End-to-end strategies that turn AI into real business results—tailored to your goals, challenges, and scale.</p>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-lg-4 '>
                        <div className='card shadow border-0 p-4 mb-4'>
                            <div className='icon '>
                                <img src={Target} alt="" />
                            </div>
                            <div className='service-title'>
                                <h4>AI Strategy & Road mapping</h4>
                            </div>
                            <div className='service-contant'>
                                <p>We define your AI vision, prioritize opportunities, and build a roadmap aligned with your goals.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4'>
                        <div className='card shadow border-0 p-4'>
                            <div className='icon'>
                                <img src={Vector1} alt="" />
                            </div>
                            <div className='service-title'>
                                <h4>Custom AI Model Development</h4>
                            </div>
                            <div className='service-contant'>
                                <p>From prototyping to deployment—build AI models tailored to your data, use case, and growth targets.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4'>
                        <div className='card shadow border-0 p-4'>
                            <div className='icon'>
                                <img src={Vector2} alt="" />
                            </div>
                            <div className='service-title'>
                                <h4>AI Readiness & Assessment</h4>
                            </div>
                            <div className='service-contant'>
                                <p>Assess your systems, data, and infrastructure to ready your business for AI.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4'>
                        <div className='card shadow border-0 p-4'>
                            <div className='icon'>
                                <img src={Vector3} alt="" />
                            </div>
                            <div className='service-title'>
                                <h4>AI Integration & Automation</h4>
                            </div>
                            <div className='service-contant'>
                                <p>Deploy AI to improve workflows, decision-making, and customer experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4'>
                        <div className='card shadow border-0 p-4'>
                            <div className='icon'>
                                <img src={Vector4} alt="" />
                            </div>
                            <div className='service-title'>
                                <h4>Data Engineering & Infrastructure</h4>
                            </div>
                            <div className='service-contant'>
                                <p>Optimize data pipelines for real-time AI and scalable growth.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4'>
                        <div className='card shadow border-0 p-4'>
                            <div className='icon'>
                                <img src={Vector5} alt="" />
                            </div>
                            <div className='service-title'>
                                <h4>Responsible AI & Compliance</h4>
                            </div>
                            <div className='service-contant'>
                                <p>Implement ethical, transparent AI with governance and risk management.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service-btn '>
                    <a href="" className='btn-primary' >Book a Free Strategy call</a>
                </div>
            </div>
        </section>

        <section>
            
        </section>


    </>
  )
}

export default Home