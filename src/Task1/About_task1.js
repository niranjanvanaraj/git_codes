import React from 'react';
function About_Task1({ active }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginTop: "20px", backgroundColor: "lightgray" , width:"50%" ,height:"300%"}}>
      <h3>About Profile</h3>
      <p>{active.about}</p>

      <table border="1" style={{ width: "80%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{active.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{active.email}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>{active.place}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default About_Task1;