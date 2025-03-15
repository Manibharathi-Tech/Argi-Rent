import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './NavbarLF.css'

function NavbarLF({ shownavbar }) {

    const navigate = useNavigate();

    function timedelay() {
       const timeout = setTimeout(() => {
            navigate("/");
          }, 3000);
          return () => clearTimeout(timeout); 
    }


    const handleScrollToBottom = (e) => {

        e.preventDefault(); 
        const contactSection = document.getElementById("contact-section");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      };


      const artscroll = (e) => {

        e.preventDefault(); 

        const contactSection = document.getElementById("Article-section");
        
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      };

      const toggleMenu = () => {
        document.querySelector(".mobile-menu").classList.toggle("active");
    };


    return (

        <div className='bodynav'>

    <nav className="navbar">
        <div className="nav-container">
            <div className="logo">
                <img src="https://media.gettyimages.com/id/1166279866/vector/farmer-truck.jpg?s=612x612&w=0&k=20&c=_LPjbnuxFKEzGFOOqyywn7OsQVuKmaRjmhVbv8MEr5Q=" alt="Logo" style={{marginLeft:"-20px"}}/>
            </div>
            <ul className="nav-links">
                {<li><Link to="/landingFarmer">Home</Link></li>}
                {<li><Link to="/exploreLF">Explore-Equipment</Link></li>}
                {<li><Link to="/placedOrderFarmer">Order-Equipment</Link></li>}
                {shownavbar && <li><Link to="#" onClick={artscroll}>Articles</Link></li>}
                {<li><Link to="#" onClick={handleScrollToBottom}>Contact</Link></li>}
            </ul>
            <div className="nav-icons">
                <div className="profile-menu">
                    <img src="https://t3.ftcdn.net/jpg/05/87/76/66/360_F_587766653_PkBNyGx7mQh9l1XXPtCAq1lBgOsLl6xH.jpg"
                        alt="User" className="profile-img" style={{marginTop:"15px"}}/>
                        <div className="dropdown">
                            {/* <Link to="#">Your Profile</Link> */}
                            <Link to="#" onClick={(e) => { e.preventDefault(); timedelay(); }}>Sign out</Link>
                        </div>
                </div>
            </div>
            <div className="hamburger" onClick={toggleMenu}>☰</div>
        </div>
        <ul className="mobile-menu">
            <li><Link to="/landingFarmer">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Services</Link></li>
            <li><Link to="#footer-section">Contact</Link></li>
        </ul>
    </nav>

</div>

    )
}

export default NavbarLF