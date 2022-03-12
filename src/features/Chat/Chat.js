import React, { useEffect, useState } from 'react';
import './Chat.css';
import { ChatHeader } from './ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from '../Message/Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName , selectChannels} from '../../Service/AppSlice';
import { selectUser } from '../../Service/UserSlice';
import db from '../../firebase/firebase';
import firebase from 'firebase';

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

  },[channelId]);
  
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
      {channelName?
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
        <AddCircleIcon fontSize='large' />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`${channelName?channelName:""}`}
          />
          <button 
          disabled={!channelId}
          className='chat-inputButton' 
          type="submit"
          onClick={sendMessage}
          >
            Send Message
          </button>
        </form>

        <div className='chat-inputIcons'>
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
      </>:
      <div className='div-alerts'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/1024px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png'
              alt='logo'
        />
      <h1 className='channels-alerts'>{channels.length?"Escolha um Canal":"Crie um Canal para começar a conversar :D"}</h1>
      </div>}
    </div>
  )
}
