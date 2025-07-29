import React from 'react'
import Header from '../common/Header'

import Hero from '../../assets/images/heros.png'
import Target from '../../assets/images/Target.png'
import Vector1 from '../../assets/images/Vector (1).png'
import Vector2 from '../../assets/images/Vector (2).png'
import Vector3 from '../../assets/images/Settings.png'
import Vector4 from '../../assets/images/Vector (3).png'
import Vector5 from '../../assets/images/Vector (4).png'
import Portrait from '../../assets/images/portrait.png'
import Right from '../../assets/images/right.png'
import CEO from '../../assets/images/ceo.jpg'
import Dimmer from '../../assets/images/Dimmer.png'
import Dimmer1 from '../../assets/images/Dimmer1.png'
import Dimmer2 from '../../assets/images/Dimmer2.png'
import Partner from '../../assets/images/portrait-smiling-young-man 2.png'

import TrustFactor from '../common/TrustFactor'
import Footer from '../common/footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Pagination} from 'swiper/modules';
import 'swiper/css/pagination';
import Faq from '../common/Faq'



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

        <section className='section-5'>
            <div className='choose-us d-flex'>
                <div className='main-img'>
                    <img src={Portrait} alt="" />
                </div>
                <div className='ms-5'>
                    <div className='choose-us-title'>
                        <h2>Why Businesses Choose Us</h2>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 col-lg-6 mb-4'>
                            <div className='card shadow border-0 p-4'>
                                <div>
                                    <h4 className='mb-3'><img src={Right} alt="" /> Enterprise-Expertise</h4>
                                </div>
                                <div>
                                    <p className='text-capitalize'>for complex, high-impact environments.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-6'>
                            <div className='card shadow border-0 p-4'>
                                <div>
                                    <h4 className='mb-3'><img src={Right} alt="" /> Bespoke solution</h4>
                                </div>
                                <div>
                                    <p className='text-capitalize'>for complex, high-impact environments.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-6'>
                            <div className='card shadow border-0 p-4'>
                                <div>
                                    <h4 className='mb-3'><img src={Right} alt="" /> Scalable Results</h4>
                                </div>
                                <div>
                                    <p className='text-capitalize'>for complex, high-impact environments.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-6'>
                            <div className='card shadow border-0 p-4'>
                                <div>
                                    <h4 className='mb-3'><img src={Right} alt="" /> Business-First Thinking</h4>
                                </div>
                                <div>
                                    <p className='text-capitalize'>for complex, high-impact environments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='section-6'>
            <div className='subscription'>
                <div className='subscription-heading-contant'>
                    <h2>Smart Pricing for Smarter Growth.</h2>
                    <p>Whether you're exploring AI or scaling enterprise systems, we have a plan that fits.</p>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-lg-4 '>
                        <div className='card1 border-0 p-4 mb-5'>
                            <div className='subscription-title'>
                                <h4>Starter</h4>
                                <p>For early-stage teams exploring AI possibilities.</p>
                                <h4>$2,500/month</h4>
                            </div>
                            <div className='subscription-contant mt-5'>
                                <ul>
                                    <li>AI readiness assessment</li>
                                    <li className='pt-2'>1 tailored use-case workshop</li>
                                    <li className='pt-2'>Strategy consultation (10 hr/m)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4 '>
                        <div className='card2 border-0 p-4 mb-5'>
                            <div className='subscription-title'>
                                <h4>Growth <p className='btn'>Popular</p></h4>
                                <p>For early-stage teams exploring AI possibilities.</p>
                                <h4>$6,500/month</h4>
                            </div>
                            <div className='subscription-contant mt-5'>
                                <ul>
                                    <li>Full AI roadmap</li>
                                    <li className='pt-2'>Prototype development</li>
                                    <li className='pt-2'>Dedicated consultant</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4 '>
                        <div className='card3 border-0 p-4 mb-5'>
                            <div className='subscription-title'>
                                <h4>Enterprise Plan</h4>
                                <p>For early-stage teams exploring AI possibilities.</p>
                                <h4>$6,500/month</h4>
                            </div>
                            <div className='subscription-contant mt-5'>
                                <ul>
                                    <li>Full AI deployment</li>
                                    <li className='pt-2'>Ongoing optimization</li>
                                    <li className='pt-2'>Governance & risk management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                                      
                </div>
                <div className='service-btn mt-5'>
                    <a href="" className='btn-black' >See Full Plan</a>
                </div>
            </div>
        </section>



        <section className='section-7'>
            <div className='comment mb-3'>
                <div className='comment-heading-contant'>
                    <h2>insights from those we've served</h2>
                    <p>Real stories of transformation from companies that turned AI into measurable impact—where innovation meets execution and results speak for themselves.</p>
                </div>

                <Swiper
                    pagination={{
                      dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                    <div className='contant d-flex'>
                        <div className='text-contant'>
                            <div>
                                <h3>“WiseConsult turned our idea into a working AI system—saving us 10+ hours a week and cutting errors by 30%.”</h3>
                            </div>
                            <div className='info'>
                                <span>George</span>
                                <p>COO, HealthTech Startup</p>
                            </div>
                        </div>
                        <div className='' >
                            <img src={CEO} alt="CEO" className='contant-img' />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='contant d-flex'>
                        <div className='text-contant'>
                            <div>
                                <h3>“WiseConsult turned our idea into a working AI system—saving us 10+ hours a week and cutting errors by 30%.”</h3>
                            </div>
                            <div className='info'>
                                <span>George</span>
                                <p>COO, HealthTech Startup</p>
                            </div>
                        </div>
                        <div className='' >
                            <img src={CEO} alt="CEO" className='contant-img' />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='contant d-flex'>
                        <div className='text-contant'>
                            <div>
                                <h3>“WiseConsult turned our idea into a working AI system—saving us 10+ hours a week and cutting errors by 30%.”</h3>
                            </div>
                            <div className='info'>
                                <span>George</span>
                                <p>COO, HealthTech Startup</p>
                            </div>
                        </div>
                        <div  >
                            <img src={CEO} alt="CEO" className='contant-img' />
                        </div>
                    </div>
                    </SwiperSlide>

                </Swiper>
            
            </div>
        </section>

        <section className='section-8'>
            <div className='p-1'>
                <div className='comment-heading-contant'>
                    <h2>Insights That Drive Business Forward</h2>
                    <p>Stay ahead with expert perspectives, case studies, and practical guides on AI strategy, innovation, and implementation.</p>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-lg-4 '>
                        <div className='card border-0  mb-5'>
                            <img src={Dimmer} alt="" />
                            <h6>Measuring and Maximizing AI Value in the Enterprise: A Practical Guide</h6>
                            <span>June 10, 2025</span>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4 '>
                        <div className='card border-0  mb-5'>
                            <img src={Dimmer1} alt="" />
                            <h6>How AI is Transforming the C-Suite: The New Era of Data-Driven Leadership</h6>
                            <span>June 10, 2025</span>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4 '>
                        <div className='card border-0  mb-5'>
                            <img src={Dimmer2} alt="" />
                            <h6>Building Secure AI Systems: Preventing Model Leaks and Data Breaches</h6>
                            <span>June 10, 2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='section-9'>
            <div className='comment-heading-contant'>
                <h2>the FAQs— We’ve Got the Answers</h2>
                <p>Everything you need to know about working with us and getting started with AI.</p>
            </div>
            <Faq />
        </section>

        <section className='section-10'>
            <div className='comment-heading-contant mb-5'>
                <h2>Let’s Map your smartest move <br />With AI Advantage</h2>
                <p>We’ll help you explore what AI can do for your business—at no cost, no obligation. Book Your Free 30-Minute AI Strategy Call.</p>
            </div>
            <div className='pt-5 '>
                <a href="" className='btn-primary mx-3'>Schedule a Call</a>
                <a href="" className='btn-secondary'>How It Works</a>
            </div>
        </section>


            
        <Footer/>
        </main>
    </>
  )
}

export default Home