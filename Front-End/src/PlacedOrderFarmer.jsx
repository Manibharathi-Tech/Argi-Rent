import React, { useEffect, useState } from 'react'
import NavbarLF from './NavbarLF'
import Footer from './Footer'
import PaymentCard from './paymentCard';

function PlacedOrderFarmer() {


    const [product, setProduct] = useState([])

  // Fetch orderEquipment data from database
  useEffect(() => {
    fetch("http://localhost:2000/getdataproduct")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, []);


  //! Remove data from orderEquipment

  const removeFromWishlist = (id) => {
    fetch(`http://localhost:2000/removedata/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setProduct(product.filter((machine) => machine._id !== id)); //  Update frontend state
        alert("Removed from orderEquipment!");
      })
      .catch((error) => console.error("Error removing from orderEquipment"));
  };


    return (
        <>

            <div className='navabw'>
                <NavbarLF shownavbar={false} />
            </div>

            <h2 style={{ marginLeft: "600px", position: "relative", top: "40px" }}>Ordered-Items</h2>

            <div className="wishlist-container">
                {product.length > 0 ? (
                    product.map((machinery) => (
                        <PaymentCard
                        key={machinery._id}
                        EquipImage={machinery.EquipImage}
                        EquipName={machinery.EquipName}
                        EquipLocation={machinery.EquipLocation}
                        EquipOwnerName={machinery.EquipOwnerName}
                        EquipPhNo={machinery.EquipPhNo}
                        EquipEmail={machinery.EquipEmail}
                        EquipTotal={machinery.AmountPay}
                        click={() => removeFromWishlist(machinery._id)}
                        />
                         
                    ))
                ) : (
                    <p>Go And Upload The Rentel Equipment...</p>
                )}
            </div>

            <div className="footerw">
                <Footer />
            </div>
            <div id="contact-section"></div> 
        </>
    )
}

export default PlacedOrderFarmer