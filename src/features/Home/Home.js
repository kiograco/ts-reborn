import React from 'react';
import { Chat } from '../Chat/Chat'
import Sidebar from '../Sidebar/Sidebar';

export const Home = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <Chat />
    </React.Fragment>

  )
}
