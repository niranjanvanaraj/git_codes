import React from 'react'
import './Login_task1.css'
const Login_task1 = () => {
  return (
    <div className='logindata'>
      <h1>welcome to login page</h1>
      <form className='login'>
        E Mail : <input type='email' placeholder='E-Mail'></input><br/>
        Password : <input type='password' placeholder='Password'></input><br/>
        Mobile : <input type='number' placeholder='Mobile'></input><br/>
        <button className='loginbutton'>Confirm</button>
      </form>
    </div>
  )
}

export default Login_task1
