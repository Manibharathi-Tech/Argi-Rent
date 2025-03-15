import React from 'react'
import './PaymentCard.css'

function PaymentCard({EquipImage,EquipName,EquipLocation,EquipOwnerName,EquipPhNo,EquipEmail,EquipTotal,click}) {
    return (
        <div className="conCard" style={{ border: "2px solid black", height: "650px", width: "400px" }}>
            <img className="infoCard" src={EquipImage} alt={EquipName} />
            <div className="py-4">
                <h2>{EquipName}</h2>
                <p >📍 {EquipLocation}</p>
                <p >👤 Owner: {EquipOwnerName}</p>
                <div className="mt-4">
                    <p >📞 {EquipPhNo}</p>
                    <p >✉️ {EquipEmail}</p>
                    <h2>💰 Amount-To-Pay: ₹{EquipTotal}</h2>
                </div>
                <button style={{marginTop:"-20px"}}>Pay</button>
                <button onClick={click}> 🗑️ remove</button>
            </div>

            <div id="contact-section"></div>

        </div>
    )
}

export default PaymentCard