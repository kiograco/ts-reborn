import React, { useEffect, useState } from 'react';
import './Chat.css';
import { ChatHeader } from './ChatHeader';
import Message from '../Message/Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName, selectChannels } from '../../Service/AppSlice';
import { selectUser } from '../../Service/UserSlice';
import db from '../../firebase/firebase';
import firebase from 'firebase';
import logo from '../../img/ghost.png';
import { Send } from '@material-ui/icons';

export const Chat = () => {
  const channelId = useSelector(selectChannelId);
  const user = useSelector(selectUser);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const channels = useSelector(selectChannels);

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection("messages")
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }

  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('channels').doc(channelId).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  }
  return (
    <div className='chat'>
      {channelName ?
        <>
          <ChatHeader channelName={channelName} />
          <div className='chat-messages'>
            {messages.map((message) =>
              <Message
                key={message}
                timestamp={message.timestamp}
                message={message.message}
                user={message.user}
              />
            )}
          </div>
          <div className='chat-input'>
            <form>
              <input
                value={input}
                disabled={!channelId}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`${channelName ? channelName : ""}`}
              />
              <button
                disabled={!channelId}
                className='chat-inputButton'
                type="submit"
                onClick={sendMessage}
              >
                <Send
                  fontSize='large'
                  color='primary'

                />
              </button>
            </form>
          </div>
        </> :
        <div className='div-alerts'>
          <img src={logo} alt='logo' />
          <h1 className='channels-alerts'>{channels.length ? "Choose a channel" : "Create a Channel to Start Chatting :D"}</h1>
        </div>}
    </div>
  )
}