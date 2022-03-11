import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { Chat } from './features/Chat/Chat';
import Sidebar from './features/Sidebar/Sidebar';
import { selectUser } from './features/UserSlice';
import Login from './Login/Login';
import { auth } from './firebase/firebase';
import {login, logout} from './features/UserSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);


  useEffect(()=> {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(
          login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        })
        );
      } else{
        dispatch(logout());

      }
    })
  }, [dispatch]);


  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ):(
        <Login/>
      )}
    </div>
  );
}

export default App;
