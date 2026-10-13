import { React, useState } from "react"; 
import img from './Mec.jpeg'
import './Mec.css';

function Mec() { 

  const [value, setValue] = useState({ name: "", number: "", email: "", gender: "", dob: "", address: "" }); 
  const [error, setError] = useState({ nameError: "", numberError: "", emailError: "", genderError: "", dobError: "", addressError: "" }); 

  function change(e) { 
    setValue({ ...value, [e.target.name]: e.target.value }); 
  } 
  
  function handleSubmit(e) { 
    e.preventDefault(); 
    let localErrors = { nameError: "", numberError: "", emailError: "", genderError: "", dobError: "", addressError: "" }; 
    let hasError = false; 
    
    if (value.name === "") { localErrors.nameError = "The field is required."; hasError = true; } 
    else if (value.name.length < 3) { localErrors.nameError = "Name must be at least 3 characters."; hasError = true; } 
    if (value.number === "") { localErrors.numberError = "The field is required."; hasError = true; } 
    if (value.email === "") { localErrors.emailError = "The field is required."; hasError = true; } 
    if (value.gender === "") { localErrors.genderError = "The field is required."; hasError = true; } 
    if (value.dob === "") { localErrors.dobError = "The field is required."; hasError = true; } 
    if (value.address === "") { localErrors.addressError = "The field is required."; hasError = true; } 

    setError(localErrors); 

    if (hasError === false) { 
      alert("Form Submitted Successfully!"); 
      console.log("Form Values:", value); 
    } 
  } 

  return ( 
    <div 
      className="login-background" > 
      <div className="left-side"> 
        <h1>LEARN &</h1> 
        <h1>DISCOVER.</h1> 
      </div> 
      <div className="right-side"> 
        <div className="white-box"> 
          <h3>ONLINE ADMISSION ENQUIRY - 2026</h3> 
          <form onSubmit={handleSubmit}> 
            <div className="input-block"> 
              <label>Name</label> 
              <input type="text" name="name" onChange={change} /> 
              <span className="error-text">{error.nameError}</span> 
            </div> 
            <div className="input-block"> 
              <label>Mobile Number</label> 
              <input type="number" name="number" onChange={change} /> 
              <span className="error-text">{error.numberError}</span> 
            </div> 
            <div className="input-block"> 
              <label>Email</label> 
              <input type="email" name="email" onChange={change} /> 
              <span className="error-text">{error.emailError}</span> 
            </div> 
            <div className="input-block"> 
              <label>Gender</label> 
              <select name="gender" onChange={change}> 
                <option value="">Select</option> 
                <option value="Male">Male</option> 
                <option value="Female">Female</option> 
              </select> 
              <span className="error-text">{error.genderError}</span> 
            </div> 
            <div className="input-block"> 
              <label>Date of Birth</label> 
              <input type="date" name="dob" onChange={change} /> 
              <span className="error-text">{error.dobError}</span> 
            </div> 
            <div className="input-block"> 
              <label>Address</label> 
              <input type="text" name="address" onChange={change} /> 
              <span className="error-text">{error.addressError}</span> 
            </div> 
            <button type="submit" className="submit-btn">Apply</button> 
          </form> 
        </div> 
      </div> 
    </div> 
  ); 
} 


export default Mec;



