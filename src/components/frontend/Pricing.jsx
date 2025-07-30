import React from 'react'
import Header from '../common/Header'
import TrustFactor from '../common/TrustFactor'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Pagination} from 'swiper/modules';
import 'swiper/css/pagination';
import CEO from '../../assets/images/ceo.jpg'
import CTO from '../../assets/images/CTO.png'
import Footer from '../common/footer';
import Faq from '../common/Faq';

const Pricing = () => {
  return (
    <>
    <main>
        <section className='section-11'>
            <Header/>
            <div className='hero text-center'>
                <h1>Pricing Plans</h1>
                <p className='mt-5 text-capitalize'>Flexible AI Consulting Packages Tailored to Your Business Goals</p>
            </div>
        </section>

        <section className='section-6'>
            <div className='subscription'>
                <div className='subscription-heading-contant'>
                    <h2>SPlans That Scale With You</h2>
                    <p>Choose the right package for where you are now—and where you're going next.</p>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-lg-4 '>
                        <div className='card1 border-0 p-4 mb-5'>
                            <div className='subscription-title pb-3'>
                                <h4>Starter</h4>
                                <p>For early-stage teams exploring AI possibilities.</p>
                                <h4>$2,500/month</h4>
                            </div>
                            <hr />
                            <div className='subscription-contant mt-5 mb-5'>
                                <ul>
                                    <li>Full AI deployment</li>
                                    <li className='pt-2'>Ongoing optimization</li>
                                    <li className='pt-2'>Scalable data pipelines</li>
                                    <li className='pt-2'>Governance & risk management</li>
                                    <li className='pt-2'>System & data review</li>
                                    <li className='pt-2'>Dedicated AI consultant</li>
                                    <li className='pt-2'>Priority support (email & video)</li>
                                </ul>
                            </div>
                            <hr />
                            <div className='subscription-btn mt-4 mb-3'>
                                <a href="" >Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4 '>
                        <div className='card2 border-0 p-4 mb-5'>
                            <div className='subscription-title pb-3'>
                                <h4>Growth <p className='btn'>Popular</p></h4>
                                <p>For early-stage teams exploring AI possibilities.</p>
                                <h4>$6,500/month</h4>
                            </div>
                            <hr />
                            <div className='subscription-contant mt-5 mb-5'>
                                <ul>
                                    <li>Full AI deployment</li>
                                    <li className='pt-2'>Ongoing optimization</li>
                                    <li className='pt-2'>Scalable data pipelines</li>
                                    <li className='pt-2'>Governance & risk management</li>
                                    <li className='pt-2'>System & data review</li>
                                    <li className='pt-2'>Dedicated AI consultant</li>
                                    <li className='pt-2'>Priority support (email & video)</li>
                                </ul>
                            </div>
                            <hr />
                            <div className='btnn mt-4 mb-3'>
                                <a href="" className='btn-primaryy'>Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4 '>
                        <div className='card3 border-0 p-4 mb-5'>
                            <div className='subscription-title pb-3'>
                                <h4>Enterprise Plan</h4>
                                <p>For early-stage teams exploring AI possibilities.</p>
                                <h4>$6,500/month</h4>
                            </div>
                            <hr />
                            <div className='subscription-contant mt-5 mb-5'>
                                <ul>
                                    <li>Full AI deployment</li>
                                    <li className='pt-2'>Ongoing optimization</li>
                                    <li className='pt-2'>Scalable data pipelines</li>
                                    <li className='pt-2'>Governance & risk management</li>
                                    <li className='pt-2'>System & data review</li>
                                    <li className='pt-2'>Dedicated AI consultant</li>
                                    <li className='pt-2'>Priority support (email & video)</li>
                                </ul>
                            </div>
                            <hr />
                            <div className='subscription-btn mt-4 mb-3'>
                                <a href="" >Get Started</a>
                            </div>
                        </div>
                    </div>
                                      
                </div>
                <div className='service-btn mt-5'>
                    <a href="" className='btn-black' >See Full Plan</a>
                </div>
            </div>
        </section>

        <TrustFactor/>

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
                                <h3>“We gained more than advice—we got a partner. Our retention jumped 25% in 3 months with their AI solution.”</h3>
                            </div>
                            <div className='info'>
                                <span>Hamilton</span>
                                <p>CTO, SaaS Company</p>
                            </div>
                        </div>
                        <div className='' >
                            <img src={CTO} alt="CEO" className='contant-img' />
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
                            <img src={CTO} alt="CEO" className='contant-img' />
                        </div>
                    </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>

        <section className='section-9'>
            <div className='comment-heading-contant'>
                <h2>Frequently Asked Questions</h2>
                <p>Still have questions? We’ve got answers.</p>
            </div>
            <Faq/>
        </section>

        <section className='section-10'>
            <div className='comment-heading-contant mb-3'>
                <h2>Need Something Custom?</h2>
                <p>We understand that some projects are unique. Reach out to create a custom engagement that fits your exact needs.</p>
            </div>
            <div className='pt-3 mb-5 pb-5'>
                <a href="" className='btn-primary mx-3'>Schedule a free consultation</a>
            </div>
        </section>


    <Footer/>
    </main>
    </>
  )
}

export default Pricing