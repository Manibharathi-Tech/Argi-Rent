import React, { useEffect, useState } from 'react'
import './ExploreCard.css'

function ExploreCard({ img, eqname, eqprice, loc, ownername, phno, click }) {

    const [days, setDays] = useState(1);
    const [total, setTotal] = useState(eqprice);

    


    useEffect(() => {
        setTotal(days*eqprice);
    }, [days])

    localStorage.setItem("TotalPrice" ,total);

    return (
        <div className="card">
            <img src={img} alt="Tractor" />
            <h3>{eqname}</h3>
            <p>Price: <span className="price">${eqprice}</span> / day</p>
            <p>Location : {loc}</p>
            <p>Owner Name : {ownername}</p>
            <p>Ph.No : {phno}</p>
            <label>Days:</label>
            <input type="number" className="days" onChange={(e) => { setDays(e.target.value) }} required/>
            <p>Total: <span className="total-price"><input type="number" value={total} readOnly /></span></p>
            <button className="order-btn" onClick={click}>Place Order</button>
        </div>
    )
}

export default ExploreCard