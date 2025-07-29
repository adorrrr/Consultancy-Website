import { FaLinkedin, FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';
import Logo from '../../assets/images/Vector.png'

const Footer = () => {
  return (
    <footer className="footer-section text-light ">
      <div className="footer">
        <div className="row mb-5">

          {/* Company Info */}
          <div className="companyInfo col-md-4">
            <h5 className='mb-3'><img src={Logo} alt="" className='mx-2' /> WiseConsult</h5>
            <p >
              Trusted AI Consultancy For The Real World. We Make AI Useful, Usable, And Scalable For Enterprises Ready To Transform Their Business.
            </p>
            <div className="companyIcon d-flex gap-3 fs-3 mt-2">
              <a href="#" className="text-light"><FaLinkedin /></a>
              <a href="#" className="text-light"><FaXTwitter /></a>
              <a href="#" className="text-light"><FaFacebook /></a>
              <a href="#" className="text-light"><FaInstagram /></a>
            </div>
          </div>

          {/* Address */}
          <div className="info col-md-2 mb-4">
            <h6 className='mb-4'>Address</h6>
            <p className=" mb-1">123 Business Ave</p>
            <p >45678, NY, USA</p>
          </div>

          {/* Contact */}
          <div className="info col-md-2 mb-4">
            <h6 className='mb-4'>Get In Touch</h6>
            <p className=" mb-1">hello@wiseconsult.ai</p>
            <p >+1 212 567 8910</p>
          </div>

          {/* Website Links */}
          <div className="info col-md-2 mb-4">
            <h6 className='mb-4'>Website</h6>
            <ul className="list-unstyled ">
              <li><a href="#" className="text-light text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="info col-md-2 mb-4">
            <h6 className='mb-4'>Company</h6>
            <ul className="list-unstyled ">
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-light text-decoration-none">Career</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-secondary pt-5 mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center text ">
          <p className="mb-md-0">© 2025 WiseConsult. All Rights Reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="text text-decoration-none">Privacy Policy</a>
            <a href="#" className="text text-decoration-none">Terms & Conditions</a>
            <a href="#" className="text text-decoration-none">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
