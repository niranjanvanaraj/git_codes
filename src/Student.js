import React from "react";
import Paper from '@mui/material/Paper';

function Student({ student }) {
  return (
    <div >
        <Paper elevation={3}
            style={{width :"35%" ,
             height:"33vh" , 
             paddingLeft :"4%" ,
              margin:"3%",backgroundColor:"lightGrey"}}>
      <h2>Student Information</h2>
      <Paper elevation={3} style={{width :"75%" ,
             height:"20vh" ,paddingLeft :"3%" , }}>
      <p>Name: {student.name}</p>
      <p>Department: {student.department}</p>
      </Paper>
      </Paper>
    </div>
  );
}

export default Student;