import {React,useState,useEffect} from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Login_task1 = () => {
  const [name,setname]=useState("");
  const[pass,setpass]=useState("");
  const [data,setdata]=useState([]);

  function changename(e){
    setname(e.target.value)
  }
  function changepass (e){
    setpass(e.target.value)
  }
  useEffect(()=>{
    axios.get('https://dummyjson.com/c/e2d7-5698-4370-bbf7')
    .then((res)=>{setdata(res.data)})
  })
  function check(e){
    e.preventDefault();
    if(name===data.username && pass===data.password){
      <Alert severity="success">This is a success Alert.</Alert>
    }
    else{
      <Alert severity="error">This is an error Alert.</Alert>
    }
  }
  return (
    // <div className='logindata'>
    //   <h1>welcome to login page</h1>
    //   <form className='login'>
    //     E Mail : <input type='email' placeholder='E-Mail'></input><br/>
    //     Password : <input type='password' placeholder='Password'></input><br/>
    //     Mobile : <input type='number' placeholder='Mobile'></input><br/>
    //     <button className='loginbutton'>Confirm</button>
    //   </form>
    // </div>
    <>
<div ><Paper elevation={3} sx={{width:"15%", padding:"3%", margin :"13%" , backgroundColor:"rgb(177, 170, 170)"}}>
     <div>
      <Paper elevation={3} sx={{width : "11%", marginLeft:"45%",marginTop:"2%"}} >
        <LoginRoundedIcon/>
      </Paper>
    </div>

    <Typography variant="h5" sx={{marginLeft:"2%",marginTop:"5%"}}> Login </Typography>

<div style={{ width :"50%" ,marginLeft:"1%", marginTop:"1%"}}>
    <TextField onChange={changename}
      variant="standard" label="username" required/><br/>
   <TextField onChange={changepass}
      type="password" variant='standard' label="password" required />
</div>

    <Button onClick={check}style={{marginTop:"11%",marginLeft:"11%"}}variant="contained">Confirm</Button>
    </Paper>
</div>
    </>
  )
}

export default Login_task1
