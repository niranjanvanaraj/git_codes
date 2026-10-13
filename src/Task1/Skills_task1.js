import React from 'react';
function Skills_Task1({ active }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "20px", backgroundColor: "lightgray" , width:"50%" ,height:"300%"}}>
      <h3>Skills</h3>
      <p>{active.skills}</p>
    </div>
  );
}
export default Skills_Task1;