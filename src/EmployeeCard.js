import EmployeeSkills from "./EmployeeSkills";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function EmployeeCard({ employee }) {
  return (
    <div>
<Paper elevation={5} style={{width :"35%" ,
             height:"40vh" ,padding :"6%" ,marginLeft:"5%",marginTop:"2%" }}>
     <AccountCircleIcon style={{marginLeft:"90%"}}/>
      <h2>Employee Details</h2>
<IconButton aria-label="show 2 unread messages">
      <Badge badgeContent={2} color="primary">
        <MailIcon />
      </Badge>
    </IconButton>
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' ,backgroundColor:"lightGrey"}}>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Salary: ₹{employee.salary}</p>
    </Box>
      
</Paper>
      <EmployeeSkills skills={employee.skills} />
    </div>
  );
}

export default EmployeeCard;