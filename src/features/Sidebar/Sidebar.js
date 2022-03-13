import React, { useEffect } from 'react';
import AddIcon from "@material-ui/icons/Add";
import "./Sidebar.css";
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import CallIcon from "@material-ui/icons/Call"
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic'
import HeadsetIcon from '@material-ui/icons/Headset'
import SettingsIcon from '@material-ui/icons/Settings'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../Service/UserSlice'
import db, { auth } from '../../firebase/firebase';
import { selectChannels, setChannels } from '../../Service/AppSlice';
import logo from '../../img/ghost.png';

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
                    {channels.map(({ id, channel }) => (
                        <SidebarChannel
                            key={id}
                            id={id}
                            channelName={channel.channelName} />
                    ))}
                </div>
            </div>


            {/* <div className='sidebar-voice'>
                <SignalCellularAltIcon
                    className="sidebar-voiceIcon"
                    fontSize="large"
                />
                <div className='sidebar-voiceInfo'>
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className='sidebar-voiceIcons'>
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div> */}

            <div className='sidebar-profile'>
                <Avatar onClick={() => auth.signOut()} src={user.photo} />
                <div className='sidebar-profileInfo'>
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>

                {/* <div className='sidebar-profileIcons'>
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />

                </div> */}
            </div>
        </div>
    )
}

export default Sidebar