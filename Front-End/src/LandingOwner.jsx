import React from 'react'
import './LandingOwner.css'
import Navbar from './Navbar';
import Footer from './Footer';
import { FaTractor, FaMapMarkerAlt, FaDollarSign, FaExchangeAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function LandingOwner() {

  const navigate = useNavigate();


  return (
    <>


      <Navbar />


      <div className="bodyLO">

        <div className="containerLO">
          <div className="left">
            <h1>Welcome to AgriRent Owners</h1>
            <p>AgriRent is a dedicated platform designed to connect farm equipment owners with farmers in need of reliable machinery. As an owner,  Whether you own tractors, plows, harvesters, or other essential agricultural tools, Join us today and be a part of the future of smart and efficient farming!</p>

            <ul>
              <li><FaTractor /> Wide Range of Equipment</li>
              <li><FaMapMarkerAlt /> Available Across Regions</li>
              <li><FaDollarSign /> Cost-Effective Solutions</li>
              <li><FaExchangeAlt /> Easy Booking & Return</li>
            </ul>
            <div className="buttons">
              <button className="btn primary" onClick={() => navigate('/equipLO')}>
                Ready-To-Rent
              </button>
              <button className="btn secondary" onClick={() => navigate('/whishlistLO')}>Equip-View</button>
            </div>
          </div>
          <div className="right">
            <img src="https://c1.wallpaperflare.com/preview/58/557/238/agriculture-cereal-combine-farm.jpg" alt="Farm Equipment Icon" />
          </div>
        </div>

        <h1 id='blog' style={{marginLeft:"650px",marginTop:"20px"}}>Blog</h1>


        <div className="features">
          <div className="feature-box">
            <h3 className="h3LO">Why Rent Your Equipment?</h3>
            <p className="pOW">Renting out your farm equipment is a smart way to generate passive income while helping others access essential machinery without high ownership costs. Instead of letting your equipment sit idle, put it to work and maximize its value. Our platform ensures a secure and hassle-free rental process, connecting you with verified renters while you stay in control of pricing and availability. Earn extra income, reduce maintenance downtime, and contribute to a more sustainable agricultural ecosystem! 🚜💰</p>
          </div>

          <div className="feature-box">
            <h3 className="h3LO">How It Works?</h3>
            <p className="pOW">Our platform makes renting farm equipment simple and efficient. Owners can easily list their equipment with images, descriptions, and pricing details. Renters can browse available equipment, check locations, and connect with owners directly. Secure payment options ensure a hassle-free transaction. Once booked, both parties receive automated confirmations and updates. With real-time availability and seamless communication, renting and managing farm equipment has never been easier! 🚜✅</p>
          </div>

          <div className="feature-box">
            <h3 className="h3LO">Secure Transactions</h3>
            <p className="pOW">Secure transactions are crucial for ensuring a safe and trustworthy rental experience. Our platform implements robust encryption protocols to protect your financial data, ensuring that all payments and personal details remain confidential. By using verified payment gateways, we prevent fraud and unauthorized access, giving both renters and owners peace of mind. Always verify transaction details before proceeding, and rely on our secure system to facilitate a smooth and hassle-free rental process. 🚜🔒</p>
          </div>

          <div className="feature-box">
            <h3 className="h3LO">Easy Management</h3>
            <p className="pOW">Effortlessly manage your equipment rentals with our intuitive system. Our user-friendly dashboard allows owners to list, update, and track their equipment availability in real time, ensuring seamless coordination. Renters can easily browse, book, and communicate with owners without any hassle. With automated notifications and a structured interface, managing rentals has never been easier, giving you more time to focus on what matters most. 🚜📊</p>
          </div>

        </div>

        <section id="section1" style={{ display: "flex", textAlign: "center", alignItems: "center" }}>
          {/* <h1>Features</h1> */}
          <p>Our platform offers a diverse selection of farming machinery, including tractors, harvesters, seeders, plows, irrigation pumps, and sprayers. Farmers can choose equipment based on their specific needs, ensuring maximum efficiency during different farming seasons.</p>
        </section>

        <p class="info-paragraph">
          <strong>F</strong>arming equipment rental services <strong>revolutionize agriculture</strong>, offering cost-effective solutions for small and large-scale farmers alike. Instead of purchasing expensive machinery, farmers can <a href="#">access modern tools on demand</a>, optimizing efficiency and reducing financial strain. From tractors to irrigation systems, <strong>renting ensures access to the latest technology</strong> without long-term commitments, ultimately enhancing productivity while supporting sustainable farming practices.
        </p>

        <section id="section3">
          <h1>Start Farming NoW....</h1>
        </section>


        <p class="info-paragraph">
        <strong>T</strong>he agriculture rental model <strong>empowers farmers</strong> by providing affordable access to essential machinery and tools. Instead of bearing the high cost of ownership, farmers can <a href="#">rent tractors, harvesters, and irrigation systems</a> as needed, ensuring efficiency in every season. This system <strong>reduces maintenance costs, promotes resource-sharing</strong>, and enables even small-scale farmers to leverage advanced technology, leading to <strong>higher yields and sustainable farming practices</strong>.
        </p>



      </div>
      <Footer />

      <div id="contact-section"></div>
    </>
  )
}

export default LandingOwner