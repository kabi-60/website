import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Signup.css";
const Signup = () => {
  return (
    <div className='signup_container'>
        <div className='login_welcome'>
      
      <h1>Welcome to our premier <span>Reparify</span>  website, where automotive excellence meets unrivaled<span>customercare .</span> </h1>
      <button className='btn_login'>Explore Now</button>
      </div>
        <div className='signup_box'>
        <h1>Signup  <i class="fa-solid fa-truck-fast"></i></h1>
        <TextField
       className='box1'
       
          id="outlined-required"
          label="Name"
          autoComplete="current-password"
          
          />
        <TextField
       className='box1'
          
          id="outlined-required"
          label="Enter Email"
       
          
          />
            <TextField
         className='box1'
          id="outlined-password-input"
          label="Enter Password"
          type="password"
          autoComplete="current-password"
          />
            <TextField
         className='box1'
          id="outlined-password-input"
          label=" confirm  Password"
          type="password"
          autoComplete="current-password"
          />
          
          <Stack >
      <Button variant="contained" className='btn_sign'>SignUp</Button>
    </Stack>
        </div>

    </div>
  )
}

export default Signup