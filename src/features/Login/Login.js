import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../../firebase/firebase';


import './Login.css';

function Login() {
  const signIn = () => {
    // google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  }

  return ( 
    <div className='login'>
      <div className='login-logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/1024px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png'
              alt='logo'
        />
      <h1>Ts-Reborn</h1>
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login