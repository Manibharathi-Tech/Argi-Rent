import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import './RentEquipOwner.css'
import EquipmentCard from './EquipmentCard';

function RentEquipOwner() {

    const [ownerEmail, setOwnerEmail] = useState("");
    const [wishlist, setWishlist] = useState([]);

    const [page, setpage] = useState(1);
    const [totalpage, setTotalPage] = useState(1);


    // Get Owner Email from Local Storage
    useEffect(() => {
        const storedOwnerEmail = localStorage.getItem("EmailID");
        if (storedOwnerEmail) {
            setOwnerEmail(storedOwnerEmail);
        }
    }, []);


    console.log(ownerEmail);




    // Fetch  data when ownerEmail is available
    useEffect(() => {

        async function fetchdataEquip() {

            if (!ownerEmail)
                 return; 

            try {

                const res = await fetch(`http://localhost:2000/wishlist/${ownerEmail}?page=${page}&limit=6`);

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
    

                const data = await res.json();

                setWishlist(data.data);
                setTotalPage(data.totalpage);


            } catch (error) {
                console.error("Error fetching equipment:", error);

            }

        }

        fetchdataEquip();

    }, [ownerEmail,page]);


    console.log(wishlist);


    // Remove data from wishlist
    const removeFromWishlist = (id) => {
        fetch(`http://localhost:2000/removedata/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(() => {
                setWishlist(wishlist.filter((machinery) => machinery._id !== id));
                alert(" Equipment Removed!");
            })
            .catch((error) => console.error("Error removing from wishlist:", error));
    };



    return (
        <>

            <div className='navabw'>
                <Navbar />
            </div>

            <h2 style={{ marginLeft: "40%", position: "relative", top: "50px" }}>Rental Equipment</h2>

            <div className="wishlist-container">
                {wishlist.length > 0 ? (
                    wishlist.map((machinery) => (
                        <EquipmentCard
                            key={machinery._id}
                            EquipName={machinery.EquipName}
                            EquipLocation={machinery.EquipLocation}
                            EquipOwnerName={machinery.EquipOwnerName}
                            EquipPricePerDay={machinery.EquipPricePerDay}
                            EquipDescription={machinery.EquipDescription}
                            EquipPhNo={machinery.EquipPhNo}
                            EquipEmail={machinery.EquipEmail}
                            EquipImage={machinery.EquipImage}

                            onClick={() => removeFromWishlist(machinery._id)}
                        />
                    ))
                ) : (
                    <p>Go And Upload The Rentel Equipment...</p>
                )}
            </div>

            <button className='pagebtn' style={{ marginLeft: "600px", marginRight: "50px" }} disabled={page === 1} onClick={() => setpage(page - 1)}>Prvious</button>
            <button className='pagebtn' disabled={page === totalpage} onClick={() => setpage(page + 1)}>Next</button>

            <div className="footerw">
                <Footer />
            </div>

            <div id="contact-section"></div>

        </>
    )
}

export default RentEquipOwner