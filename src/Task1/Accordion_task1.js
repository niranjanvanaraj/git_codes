import React, { useState } from 'react';
function Accord_Task1({ active }) {
  const [show, setShow] = useState(false);

  function clickMe() {
    setShow(!show);
  }

  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h3>FAQ Accordion</h3>
      
      <div onClick={clickMe} style={{ backgroundColor: "#eee", padding: "10px", cursor: "pointer" }}>
        <b>{active.ask} (Click to read)</b>
      </div>
      
      {show === true && (
        <div style={{ padding: "10px", border: "1px solid #eee" }}>
          {active.ans}
        </div>
      )}
    </div>
  );
}
export default Accord_Task1;