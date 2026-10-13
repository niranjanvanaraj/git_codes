import React from 'react';
function Contact_Task1({ active }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" ,height:"200px", width:"400px",marginTop:"20px",backgroundColor:"lightgray"}}>
      <h3>Contact Details</h3>
      <p>Email: {active.email}</p>
      <p>Phone: {active.phone}</p>
      <p>Place: {active.place}</p>
    </div>
  );
}
export default Contact_Task1;