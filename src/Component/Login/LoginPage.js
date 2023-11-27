import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Check if the username and password are correct
    if (username === 'admin@gmail.com' && password === 'admin') {
      setLoggedIn(true);
      // Redirect to the main page upon successful login
      navigate('/dashboard'); // Change '/home' to the path you want to redirect to
    } else {
      // Handle incorrect login credentials
      setLoggedIn(false);
      alert('Invalid username or password');
    }
  };
  

  return (
    
    <div className='loginpage_container'>
       <div className='login_welcome'>
      
      <h1>Welcome to our premier <span>Reparify</span>  website, where automotive excellence meets unrivaled<span>customercare .</span> </h1>
      <button className='btn_login'>Explore Now</button>
      </div>
      <div className='loginpage_box'>
        <h1>Login <i className="fa-solid fa-truck-fast"></i></h1>
        <div className='box_container'>
          <TextField
            className='box3'
            id="outlined-required"
            label="Email"
            value={username}
              InputProps={{
        style: {
          borderColor: 'blue', // Change the border color
        },
      }}
      InputLabelProps={{
        style: {
          color: '#000', // Change the label color if needed
        },
      }}
            
            onChange={(e) => setUsername(e.target.value)}
          /><br /><br /><br />
          <TextField
            className='box3'
            variant="outlined"
            id="outlined-password-input"
            label="Password"
            type="password"
            value={password}
            InputProps={{
              style: {
                borderColor: '#000', // Change the border color
              },
            }}
            InputLabelProps={{
              style: {
                color: '#000', // Change the label color if needed
              },
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Stack className='box2'>
            <Button variant="contained" onClick={handleLogin}
             style={{ backgroundColor: '#000', color: 'white' }}>LOGIN</Button>
          </Stack>
            <h1 className='signup1'>Do not have register?</h1>
          <Link to='/sign' className='no' >
          <h1 className='signup'>SignUp</h1>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
