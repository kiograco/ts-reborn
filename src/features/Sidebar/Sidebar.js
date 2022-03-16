import React, { useEffect, useState } from 'react';
import AddIcon from "@material-ui/icons/Add";
import "./Sidebar.css";
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import { Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../Service/UserSlice'
import db, { auth } from '../../firebase/firebase';
import { selectChannels, setChannels } from '../../Service/AppSlice';
import logo from '../../img/ghost.png';
import exit from '../../img/exit.png';

function Sidebar() {
    const user = useSelector(selectUser);
    const channels = useSelector(selectChannels);
    const dispatch = useDispatch();

    useEffect(() => {
        db.collection('channels').orderBy('channelName', 'asc').onSnapshot((snapshot) =>
            dispatch(setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    channel: doc.data(),
                }))
            ))
        );
    }, []);
   
    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name");
        
        if (channelName) {
            db.collection("channels").add({
                channelName: channelName,
            })
        }
    };
    

    return (
        <div className='sidebar'>
            <div className='sidebar-top'>
                <h2>ts reborn</h2>
                <img className='logo-sidebar' src={logo} />
            </div>

            <div className='sidebar-channels'>
                <div className='sidebar-channelsHeader'>
                    <div className='siderbar-header'>
                        <h4>channels</h4>
                    </div>
                    <AddIcon onClick={() => handleAddChannel()} className='sidebar-addChannel' />
                    
                </div>
                <div className='sidebar-addChannel'>
                    {channels.map(({ id, channel}) => (
                        <SidebarChannel
                            key={id}
                            id={id}
                            channelName={channel.channelName}
                           />

                    ))}
                </div>
            </div>
            <div className='sidebar-profile'>
                <Avatar src={user.photo} />
                <div className='sidebar-profileInfo'>
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>
                <button className='button-exit' onClick={() => { auth.signOut(); document.location.reload(true) }} ><img className='logout' src={exit} /></button>
            </div>
        </div>
    )
};

export default Sidebar