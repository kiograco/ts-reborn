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
            <h3></h3>
            <div className='chatHeader-left'>
                <h3>
                    <span className='chatHeader-hash'>
                        #
                    </span>
                    {channelName}  
                </h3>
            </div>
            <div className='chatHeader-right'>
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeapleAltRoundedIcon />
                <div className='chatHeader-search'>
                    <input placeholder='Search' />
                    <SearchRoundedIcon />
                </div>

                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}
