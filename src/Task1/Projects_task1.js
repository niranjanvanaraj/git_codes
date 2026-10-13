 import React from 'react';
function Project_Task1({ active }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "20px", backgroundColor: "lightgray" , width:"50%" ,height:"300%"}}>
      <h3>Project Work</h3>
      <p><b>Title:</b> {active.title}</p>
      <p><b>Description:</b> {active.desc}</p>
    </div>
  );
}
export default Project_Task1;