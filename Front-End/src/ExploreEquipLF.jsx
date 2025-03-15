import React, { useEffect, useState } from 'react'
import './ExploreEquipLF.css'
import NavbarLF from './NavbarLF'
import ExploreCard from './ExploreCard'
import Footer from './Footer'

function ExploreEquipLF() {

    const [cardData, setCardData] = useState([])

    const [filteredData, setFilteredData] = useState([]); // Store filtered results
    const [filters, setFilters] = useState({ price: "", location: "", equipment: "" });


    async function fetching() {

        try {
            const response = await fetch("http://localhost:2000/cardExplore");
            if (!response.ok) throw new Error("Failed to fetch data");
            
            const data = await response.json();

            setCardData(data);
            setFilteredData(data); // Initialize filteredData with full data

        } catch (error) {
            console.error("Error fetching Equipment:", error);
        }

    }

    useEffect(() => {
        fetching();
    }, []);

    console.log("Original Data:", cardData);
    console.log("Filtered Data:", filteredData);


    console.log(cardData);

    let amounttotal = localStorage.getItem("TotalPrice");

    console.log(amounttotal);



    //  Function to add object to orderEquipment db 

    const AddToOdered = (machine) => {

        let amounttotal = localStorage.getItem("TotalPrice");

        console.log(amounttotal);


        fetch("http://localhost:2000/placedOrder", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...machine, AmountPay: amounttotal }), //  using Spread Operator
        })
            .then((res) => res.json())

            .then((data) => {
                if (data.message === "Machine already in Placed Orders") {
                    alert("Machine is already  in Placed Orderst");
                } else {
                    alert("Machine added to Placed Orders");
                }
            })
            .catch((error) => console.error("Error adding to Placed Orders:", error));
    };



    //! Get user input in filter fields
   
    const filterdata = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    //! Filter equipment list dynamically

    useEffect(() => {
        const filtered = cardData.filter((card) => {
            return (
                (filters.price === "" || card.EquipPricePerDay <= Number(filters.price)) &&
                (filters.location === "" || card.EquipLocation.toLowerCase().includes(filters.location.toLowerCase())) &&
                (filters.equipment === "" || card.EquipName.toLowerCase().includes(filters.equipment.toLowerCase()))
            );
        });

        setFilteredData(filtered);

    }, [filters, cardData]); // Runs when filters change




    return (
        <>
            <NavbarLF shownavbar={false} />
            <div className='bodyEx'>

                <div className="containerEX">

                    <aside className="filter-bar">
                        <h2>Filter Equipment</h2>
                        <label >Price Per Day ($)</label>
                        <input type="number"  name="price"  value={filters.price} onChange={filterdata} />

                        <label >Location</label>
                        <input type="text" placeholder="Search Location" name="location" value={filters.location} onChange={filterdata} />

                        <label >Equipment Name</label>
                        <input type="text"  name="equipment" placeholder="Search Equipment" value={filters.equipment} onChange={filterdata} />


                    </aside>


                    <div className="equipment-list">

                        {filteredData.length > 0 ? (
                            filteredData.map((cardEquip) => (
                                <ExploreCard
                                    key={cardEquip._id}
                                    img={cardEquip.EquipImage}
                                    eqname={cardEquip.EquipName}
                                    eqprice={cardEquip.EquipPricePerDay}
                                    loc={cardEquip.EquipLocation}
                                    ownername={cardEquip.EquipOwnerName}
                                    phno={cardEquip.EquipPhNo}
                                    click={() => { AddToOdered(cardEquip) }} />
                            ))
                        ) : (
                            <p>Rentel Equipment Not Available...</p>
                        )}
                    </div>


                </div>

                <Footer />
                <div id="contact-section"></div>
            </div>
        </>
    )
}

export default ExploreEquipLF