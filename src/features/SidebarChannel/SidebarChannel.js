import React from 'react';
import { useDispatch } from 'react-redux';
import db from '../../firebase/firebase';
import { selectChannelName, setChannelInfo } from '../../Service/AppSlice';
import "./SidebarChannel.css";
import Imag from '../../img/normal.png';


export default function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();
  const deletarChannel = async () => {
    const res = await db.collection('channels').doc(`${id}`).delete();
  }
 

  return (
    <div className='sidebarChannel' onClick={() => dispatch
      (setChannelInfo({
        channelId: id, channelName: channelName,
      })

      )}>
      <h4>
        <span className='sidebarChannel-hash'>
          <img className='sidebarChannel-img' src={Imag} />
        </span>{channelName}
      </h4>
      <button className='siderbarChannel-button' onClick={() => deletarChannel()}>X</button>
    </div>
  )
}
