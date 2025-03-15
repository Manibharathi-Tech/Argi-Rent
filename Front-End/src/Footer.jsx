import React from 'react'
import './Footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {

  return (
    <>
      <div className="footer-container">
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h6></h6>
              <p>
                AgriRent 🌾 makes farming more accessible and cost-effective by connecting equipment owners with farmers in need. Rent or lease high-quality farm machinery hassle-free, saving money while maximizing productivity. Whether you’re looking to earn extra income or find affordable equipment, AgriRent is your go-to platform for smarter farming solutions.
              </p>
            </div>

            <div className="footer-section">
              <h6>Products</h6>
              <ul>
                <li><a className='link' href="#">Rent Info</a></li>
                <li><a className='link' href="#">Rent Pros</a></li>
                <li><a className='link' href="#">How to use</a></li>
                <li><a className='link' href="#">Eco Motor</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h6>Useful Links</h6>
              <ul>
                <li><a className='link' href="#">Your Account</a></li>
                <li><a className='link' href="#">Become an Affiliate</a></li>
                <li><a className='link' href="#">Shipping Rates</a></li>
                <li><a className='link' href="#">Help</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h6>Contact</h6>
              <p><i className="fas fa-home"></i> Chennai, CH 10012, INDIA</p>
              <p><i className="fas fa-envelope"></i> AgriRent@gmail.com</p>
              <p><i className="fas fa-phone"></i> +91 902 243 3424</p>
              <p><i className="fas fa-print"></i> +91 890 567 6754</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 AgriRent 🌾. All Rights Reserved.</p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social"><i className="fab fa-x-twitter"></i></a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="social"><i className="fab fa-google"></i></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer