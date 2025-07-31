import React from 'react'
import Header from '../common/Header'
import Footer from '../common/footer'
import Faq from '../common/Faq'


const Contact = () => {
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

        <section class="section-17">
          <div class="contact-container">
            <div class="contact-left">
              <h2>Get In Touch Today</h2>
              <p>We’re here to help you unlock the power of AI for your business. Whether you have questions, want a consultation, or need support, reach out to us anytime.</p>
              <p className='mt-5'>Let’s start your journey with us.</p>
              <div class="contact-info mt-5">
                <p><strong>A:</strong> 123 Business Ave, 45678, NY, USA</p>
                <p><strong>E:</strong> Hello@wiseconsult.ai</p>
                <p><strong>P:</strong> +1 212 567 8910</p>
              </div>
            </div>
            <div class="contact-right">
              <form>
                <div class="form-row">
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
                </div>
                <div class="form-row">
                  <input type="email" placeholder="Email" required />
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <textarea placeholder="Message" rows="4" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        <section className='section-9'>
            <div className='comment-heading-contant'>
                <h2>Quick Answers Before You Reach Out</h2>
                <p>take a moment to browse our FAQs.. You might find what you’re looking for—faster.</p>
            </div>
            <Faq />
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

export default Contact