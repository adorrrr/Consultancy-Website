import { FaLinkedin, FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">WiseConsult</h5>
            <p className="small">
              Trusted AI Consultancy For The Real World. We Make AI Useful, Usable, And Scalable For Enterprises Ready To Transform Their Business.
            </p>
            <div className="d-flex gap-3 fs-5">
              <a href="#" className="text-light"><FaLinkedin /></a>
              <a href="#" className="text-light"><FaXTwitter /></a>
              <a href="#" className="text-light"><FaFacebook /></a>
              <a href="#" className="text-light"><FaInstagram /></a>
            </div>
          </div>

          {/* Address */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-semibold">Address</h6>
            <p className="small mb-1">123 Business Ave</p>
            <p className="small">45678, NY, USA</p>
          </div>

          {/* Contact */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-semibold">Get In Touch</h6>
            <p className="small mb-1">hello@wiseconsult.ai</p>
            <p className="small">+1 212 567 8910</p>
          </div>

          {/* Website Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-semibold">Website</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-light text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-semibold">Company</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-light text-decoration-none">Career</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-top border-secondary pt-3 mt-4 d-flex flex-column flex-md-row justify-content-between align-items-center text-muted small">
          <p className="mb-2 mb-md-0">© 2025 WiseConsult. All Rights Reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-muted text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-muted text-decoration-none">Terms & Conditions</a>
            <a href="#" className="text-muted text-decoration-none">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
