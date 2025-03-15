import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'

function Navbar() {

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


    const toggleMenu = () => {
        document.querySelector(".mobile-menu").classList.toggle("active");
    };
    

    return (

        <div className='bodynav'>

            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo">
                        <img src="https://media.gettyimages.com/id/1166279866/vector/farmer-truck.jpg?s=612x612&w=0&k=20&c=_LPjbnuxFKEzGFOOqyywn7OsQVuKmaRjmhVbv8MEr5Q=" alt="Logo" style={{marginLeft:"-40px"}}/>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/landingOwner">Home</Link></li>
                        <li><Link to="/equipLO">Ready-To-Rent</Link></li>
                        <li><Link to="/whishlistLO">Equip-View</Link></li>
                        <li><Link to="#" onClick={handleScrollToBottom}>Contact</Link></li>
                    </ul>
                    <div className="nav-icons">
                        <button className="notificationbtn" style={{ padding: "5px 5px" }}>
                            <img src="https://cdn-icons-png.flaticon.com/128/2645/2645897.png" alt="" style={{ height: "30px" }} />
                        </button>
                        <div className="profile-menu">
                            <img src="https://t3.ftcdn.net/jpg/05/87/76/66/360_F_587766653_PkBNyGx7mQh9l1XXPtCAq1lBgOsLl6xH.jpg"
                                alt="User" className="profile-img" style={{ marginTop: "15px" }} />
                            <div className="dropdown">
                                {/* <Link to="#">Your Profile</Link> */}
                                <Link to="#" onClick={(e) => { e.preventDefault(); timedelay(); }}>Sign out</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hamburger" onClick={toggleMenu}>☰</div>
                </div>
                <ul className="mobile-menu">
                    <li><Link to="/landingOwner">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#footer-section">Contact</Link></li>
                </ul>
            </nav>

        </div>

    )
}

export default Navbar