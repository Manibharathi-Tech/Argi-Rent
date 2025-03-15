import React from "react";
import './EquipmentCard.css'

function EquipmentCard({ EquipName, EquipLocation, EquipOwnerName, EquipPricePerDay, EquipDescription, EquipPhNo, EquipEmail, EquipImage ,onClick })  {


    return (
        <div className="conCard" style={{ border: "2px solid black", height: "600px", width: "400px"}}>
            <img className="infoCard" src={EquipImage} alt={EquipName}  />
            <div className="py-4">
                <h2 className="text-xl font-bold text-gray-800">{EquipName}</h2>
                <p className="text-gray-600 text-sm">📍 {EquipLocation}</p>
                <p className="text-gray-600 text-sm">👤 Owner: {EquipOwnerName}</p>
                <p className="text-gray-700 font-semibold mt-2">💰 Price per Day: ₹{EquipPricePerDay}</p>
                <p className="text-gray-500 text-sm mt-2">📜 {EquipDescription}</p>
                <div className="mt-4">
                    <p className="text-gray-700">📞 {EquipPhNo}</p>
                    <p className="text-gray-700">✉️ {EquipEmail}</p>
                </div>
                <button  onClick={onClick} > 🗑️ remove</button>
            </div> 

            <div id="contact-section"></div>  
            
        </div>

        
    );
};

export default EquipmentCard;
