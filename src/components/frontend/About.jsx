import React from 'react'
import Header from '../common/Header'
import Footer from '../common/footer'
import Dimmer1 from '../../assets/images/Dimmer1.png'
import Dimmer2 from '../../assets/images/Dimmer2.png'
import Blog from '../../assets/images/Blog.png'
import CEO from '../../assets/images/CEO.png'
import Blog1 from '../../assets/images/blog1.png'
import Blog2 from '../../assets/images/blog2.png'
import Blog3 from '../../assets/images/blog3.png'
import Blog4 from '../../assets/images/blog4.png'
import TrustFactor from '../common/TrustFactor'

import Member1 from '../../assets/images/member1.png'
import Member2 from '../../assets/images/member2.png'
import Member3 from '../../assets/images/member3.png'

const About = () => {
  return (
    <>
    <main>
        <section className='section-11'>
            <Header/>
            <div className='hero text-center'>
                <h1>Measuring and Maximizing AI Value in the Enterprise: A Practical Guide</h1>
                <p className='mt-5 text-capitalize'>May 27, 2025</p>
            </div>
        </section>

        <section className='section-14'>
            <p className='mb-5'>With over 20 years of industry expertise and deep technical roots, WiseConsult helps businesses unlock the power of AI—clearly, ethically, and at scale. Our team of experts from Fortune 500s and top AI labs delivers tailored solutions that automate workflows, optimize operations, and accelerate growth. <br /><br />We turn complexity into clarity—so you can lead with confidence in an AI-driven world.</p>

            <div className='Rectangle mt-5'>
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

        <TrustFactor/>

        <section className='section-15'>
            <div className='d-flex'>
                <div>
                    <h2 className='mb-4'>Message <br />From Our CEO</h2>
                    <p className='pt-2'>“Technology moves fast. Our job is to make sure your business moves faster—with purpose.” <br /> <br />At WiseConsult, our mission is to make AI practical, ethical, and valuable for real-world business. With decades of industry experience, I’ve learned that while technology evolves fast, what matters most is clarity, trust, and measurable results. <br /><br />We founded WiseConsult to bridge innovation with application. Our vision is to be the most trusted AI consultancy for businesses that value outcomes over buzzwords. <br /><br /> If you're ready to lead with AI—wisely—we're here to help. <br /><br /><b>Kawsar Wahid</b> <br />Founder & CEO, WiseConsult
                    </p>
                </div>
                <div>
                    <img src={CEO} alt="" />
                </div>
            </div>
        </section>

        <section className='section-16'>
            <div>
                <div className='comment-heading-contant mb-3'>
                    <h2>Meet the Team</h2>
                    <p>Our diverse team combines decades of experience from Fortune 500 companies and top research institutions. We bring together engineers, data scientists, strategists, and business experts—all passionate about making AI practical and powerful.</p>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-lg-4 '>
                        <div className='card shadow border-0 p-4 mb-4'>
                            <div className='icon '>
                                <img src={Member1} alt="" />
                            </div>
                            <div className='service-title'>
                                <h4>Adam Smith</h4>
                            </div>
                            <div className='service-contant'>
                                <p>Chief AI Scientist</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4'>
                        <div className='card shadow border-0 p-4 ms-4'>
                            <div className='icon'>
                                <img src={Member2} alt="" />
                            </div>
                            <div className='service-title'>
                                <h4>Adam Smith</h4>
                            </div>
                            <div className='service-contant'>
                                <p>Head of Engineering</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4'>
                        <div className='card shadow border-0 p-4  ms-5'>
                            <div className='icon'>
                                <img src={Member3} alt="" />
                            </div>
                            <div className='service-title'>
                                <h4>Adam Smith</h4>
                            </div>
                            <div className='service-contant '>
                                <p>Strategy Lead</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4 '>
                        <div className='card shadow border-0 p-4 mb-4'>
                            <div className='icon '>
                                <img src={Member1} alt="" />
                            </div>
                            <div className='service-title'>
                                <h4>Adam Smith</h4>
                            </div>
                            <div className='service-contant'>
                                <p>Chief AI Scientist</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4'>
                        <div className='card shadow border-0 p-4 ms-4'>
                            <div className='icon'>
                                <img src={Member2} alt="" />
                            </div>
                            <div className='service-title'>
                                <h4>Adam Smith</h4>
                            </div>
                            <div className='service-contant'>
                                <p>Head of Engineering</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-4'>
                        <div className='card shadow border-0 p-4  ms-5'>
                            <div className='icon'>
                                <img src={Member3} alt="" />
                            </div>
                            <div className='service-title'>
                                <h4>Adam Smith</h4>
                            </div>
                            <div className='service-contant '>
                                <p>Strategy Lead</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='section-13'>
            <h3>Trending</h3>
            <div className='d-flex'>
                <div className='blog-post-contant '>
                        <div className='card1 d-flex mb-4 mt-3'>
                            <img src={Blog1} alt="" />
                            <div className='blog-contant'>
                                <h4 className='mb-4'>How AI is Transforming the C-Suite: The New Era of Data-Driven Leadership</h4>
                                <p className='mb-4'>June 1, 2025 <br />(5 min. Read)</p>
                                <p>Read Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                </svg>
                            </p>
                            </div>
                        </div>
                        <div className='card2 d-flex'>
                            <img src={Blog2} alt="" />
                            <div className='blog-contant'>
                                <h4 className='mb-4'>How AI is Transforming the C-Suite: The New Era of Data-Driven Leadership</h4>
                                <p className='mb-4'>June 1, 2025 <br />(5 min. Read)</p>
                                <p>Read Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                </svg>
                            </p>
                            </div>
                        </div>
                    </div>
                <div className='blog-post-contant ms-4'>
                        <div className='card3 d-flex mb-4 mt-3'>
                            <img src={Blog3} alt="" />
                            <div className='blog-contant'>
                                <h4 className='mb-4'>How AI is Transforming the C-Suite: The New Era of Data-Driven Leadership</h4>
                                <p className='mb-4'>June 1, 2025 <br />(5 min. Read)</p>
                                <p>Read Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                </svg>
                            </p>
                            </div>
                        </div>
                        <div className='card4 d-flex'>
                            <img src={Blog4} alt="" />
                            <div className='blog-contant'>
                                <h4 className='mb-4'>How AI is Transforming the C-Suite: The New Era of Data-Driven Leadership</h4>
                                <p className='mb-4'>June 1, 2025 <br />(5 min. Read)</p>
                                <p>Read Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                </svg>
                            </p>
                            </div>
                        </div>
                  </div>
            </div>
            <div className='mt-5 pt-5'>
              <a href="" className='btn-black' >See All Articles</a>
            </div>
        </section>

        <section className='section-10'>
            <div className='comment-heading-contant mb-3'>
                <h2>Ready to Transform Your Business with AI?</h2>
                <p>Stay ahead in 2025 with cutting-edge AI solutions tailored to your needs</p>
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

export default About