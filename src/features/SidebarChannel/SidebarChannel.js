import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../../Service/AppSlice';
import "./SidebarChannel.css";


export default function SidebarChannel({id, channelName}) {
  const dispatch = useDispatch();

  return (
    <div className='sidebarChannel' onClick={() => dispatch
    (setChannelInfo({
      channelId: id , channelName:channelName,
    })
    
    )}>
      <h4>
        <span className='sidebarChannel-hash'>#
        </span>{channelName}
        </h4>    
    </div>
  )
}
