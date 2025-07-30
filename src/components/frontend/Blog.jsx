import React from 'react'
import Header from '../common/Header'
import Footer from '../common/footer'
import Dimmer1 from '../../assets/images/Dimmer1.png'
import Dimmer2 from '../../assets/images/Dimmer2.png'
import Blog1 from '../../assets/images/blog1.png'
import Blog2 from '../../assets/images/blog2.png'
import Blog3 from '../../assets/images/blog3.png'
import Blog4 from '../../assets/images/blog4.png'

const Blog = () => {
  return (
    <>
    <main>
        <section className='section-11'>
            <Header/>
            <div className='hero text-center'>
                <h1>Blogs, Insights & Updates</h1>
                <p className='mt-5 text-capitalize'>Get fresh takes, practical insights, and stories from the frontlines of building with AI—no fluff, just the stuff that drives real growth.</p>
            </div>
        </section>

        <section className='section-12'>
            <div>
                <div className='comment-heading-contant mb-3'>
                    <h2>Need Something Custom?</h2>
                    <p>We understand that some projects are unique. Reach out to create a custom engagement that fits your exact needs.</p>
                </div>
                <div className='d-flex '>
                    <div className='blog-post-img'>
                        <div className='mb-3'>
                            <h4>Measuring and Maximizing AI Value in the Enterprise: A Practical Guide</h4>
                        </div>
                        <div className='d-flex'>
                            <div className='mb-2'>
                                <h5>May 27, 2025 <br />(5 min. Read)</h5>
                            </div>
                            <div className='Read-Now '>
                                <p >Read Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='blog-post-contant ms-4'>
                        <div className='card1 d-flex mb-4 mt-3'>
                            <img src={Dimmer1} alt="" />
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
                            <img src={Dimmer2} alt="" />
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

export default Blog