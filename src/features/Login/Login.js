import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase/firebase';
import logo from '../../img/ghost.png';
import './Login.css';

function Login() {
  const signIn = () => {
    // google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return ( 
    <div className='login'>
      <div className='login-logo'>
        <img src={logo} alt='logo'/>
        <h1>Ts-Reborn</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login