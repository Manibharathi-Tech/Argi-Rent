import { useRef, useState } from "react";
import "./EquipOwner.css";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function EquipOwner() {

  const emailid = localStorage.getItem("EmailID")

  const [equipmentNameState, setequipmentNameState] = useState("");
  const [pricePerDayState, setpricePerDayState] = useState("");
  const [descriptionState, setdescriptionState] = useState("");
  const [ownerNameState, setownerNameState] = useState("");
  const [locationState, setlocationState] = useState("");
  const [phoneNumberState, setphoneNumberState] = useState("");
  const [emailState, setemailState] = useState("");
  const [imageState, setimageState] = useState("");

  const imageinputref = useRef(null);

  //! Convert image to Base64

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimageState(reader.result); // Store Base 64 string
    };
  };



  async function dataUpload() {


    if (!equipmentNameState || !pricePerDayState || !descriptionState || !ownerNameState || !locationState || !phoneNumberState || !imageState) {
      alert("All fields are required.");
      return;
    }

    //set the email
    setemailState(emailid);

    const newdata = {
      EquipName: equipmentNameState,
      EquipPricePerDay: pricePerDayState,
      EquipDescription: descriptionState,
      EquipOwnerName: ownerNameState,
      EquipLocation: locationState,
      EquipPhNo: phoneNumberState,
      EquipEmail: emailid,
      EquipImage: imageState
    }


    console.log(newdata);

    try {
      const EQresponse = await fetch("http://localhost:2000/ownerequip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newdata),
      });

      const res = await EQresponse.json();

      if (!EQresponse.ok) {
        throw new Error(res.error || "Failed to add equipment");
      }

      console.log(res);

      alert(res.message);

      // Store Owner Email in Local Storage
      localStorage.setItem("OwnerEmail", newdata.EquipEmail);

    
      setequipmentNameState("");
      setpricePerDayState("");
      setdescriptionState("");
      setownerNameState("");
      setlocationState("");
      setphoneNumberState("");
      setimageState("");

      if (imageinputref.current) {
        imageinputref.current.value = "";
      }


    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }




  return (

    <>

      <Navbar />

      <div className="containerEQ">

        <div className="cardEQ">

          <h2 className="titleEQ">List Your Equipment</h2>

          <form className="formEQ" autoComplete="off" >

            <label htmlFor="">Equipment Name</label>
            <input className="inputEQ" type="text" placeholder="Equipment Name" value={equipmentNameState} onChange={(e) => { setequipmentNameState(e.target.value) }} required />

            <label htmlFor="">Price Per Day ($)</label>
            <input className="inputEQ" type="number" placeholder="Price Per Day ($)" value={pricePerDayState} onChange={(e) => { setpricePerDayState(e.target.value) }} required />

            <label htmlFor="">Description</label>
            <textarea className="inputEQ" placeholder="Description" value={descriptionState} onChange={(e) => { setdescriptionState(e.target.value) }} required></textarea>

            <label htmlFor="">Owner Name</label>
            <input className="inputEQ" type="text" placeholder="Owner Name" value={ownerNameState} onChange={(e) => { setownerNameState(e.target.value) }} required />
            
            <label htmlFor="">Location</label>
            <input className="inputEQ" type="text" placeholder="Location" value={locationState} onChange={(e) => { setlocationState(e.target.value) }} required />

            <label htmlFor="">Phone Number</label>
            <input className="inputEQ" type="tel" placeholder="Phone Number"  maxLength={10} value={phoneNumberState} onChange={(e) => { const value = e.target.value; if (/^\d*$/.test(value)) setphoneNumberState(value) }} required />

            <label htmlFor="">Email</label>
            <input className="inputEQ" type="email" placeholder="Email" value={emailid} readOnly />

            <label className="file-upload" style={{ width: "750px" }}>
              <span >Upload Machinery Photo</span>

              <input type="file" ref={imageinputref} style={{ width: "600px" }} accept="image/*" onChange={handleImageChange} required />

            </label>

          </form>

          <button type="submit" className="submit-btnEQ" onClick={dataUpload}>Submit Listing</button>
        </div>
      </div>


      <Footer />

      <div id="contact-section"></div>
    </>


  );
}
