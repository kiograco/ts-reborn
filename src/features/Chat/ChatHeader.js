import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocation';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeapleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded'
import React from 'react';
import "./ChatHeader.css";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';


export const ChatHeader = ({channelName}) => {
    return (
        <div className='chatHeader'>
            <h2>{channelName}  </h2>
        </div>
    )
}
