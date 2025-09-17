// Footer.js
import React from "react";
import { Link } from "react-router-dom"; 
import "./footer.css";
function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-3">
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-md-2 col-6 mb-4">
            <h6 className="fw-bold">ABOUT</h6>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-light text-decoration-none">Contact Us</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Careers</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Flipkart Stories</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Press</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Corporate Information</Link></li>
            </ul>
          </div>

          <div className="col-md-2 col-6 mb-4">
            <h6 className="fw-bold">GROUP COMPANIES</h6>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-light text-decoration-none">Myntra</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Cleartrip</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Shopsy</Link></li>
            </ul>
          </div>

          <div className="col-md-2 col-6 mb-4">
            <h6 className="fw-bold">HELP</h6>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-light text-decoration-none">Payments</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Shipping</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Cancellation &amp; Returns</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">FAQ</Link></li>
            </ul>
          </div>

          <div className="col-md-2 col-6 mb-4">
            <h6 className="fw-bold">CONSUMER POLICY</h6>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-light text-decoration-none">Cancellation &amp; Returns</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Terms Of Use</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Security</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Privacy</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Sitemap</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Grievance Redressal</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">EPR Compliance</Link></li>
            </ul>
          </div>

          <div className="col-md-2 col-12 mb-4">
            <h6 className="fw-bold">MAIL US:</h6>
            <p className="small mb-0">
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &amp; Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103, Karnataka, India
            </p>
          </div>

          <div className="col-md-2 col-12 mb-4">
            <h6 className="fw-bold">REGISTERED OFFICE ADDRESS:</h6>
            <p className="small mb-0">
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &amp; Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103, Karnataka, India<br />
              CIN : U51109KA2012PTC066107<br />
              Telephone: 044-45614700 / 044-67415800
            </p>
          </div>
        </div>
      </div>

      <hr className="border-secondary my-2" />

      <div className="container-fluid px-5 pb-3">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="d-flex flex-wrap gap-3 small">
            <Link to="#" className="text-light text-decoration-none">Become a Seller</Link>
            <Link to="#" className="text-light text-decoration-none">Advertise</Link>
            <Link to="#" className="text-light text-decoration-none">Gift Cards</Link>
            <Link to="#" className="text-light text-decoration-none">Help Center</Link>
          </div>
          <div className="small">© 2007-2025 Flipkart.com</div>
          <div className="d-flex gap-3">
            <Link to="#" className="text-light"><i className="bi bi-facebook"></i></Link>
            <Link to="#" className="text-light"><i className="bi bi-twitter"></i></Link>
            <Link to="#" className="text-light"><i className="bi bi-instagram"></i></Link>
            <Link to="#" className="text-light"><i className="bi bi-youtube"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
