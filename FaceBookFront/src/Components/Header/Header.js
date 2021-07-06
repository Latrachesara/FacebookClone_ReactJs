//import material from https://material-ui.com
import React from 'react'
import './../../Style/header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined'
import { Avatar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

//function header 
function header() {
    return (
        <div className="header">

                <div className="header_left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="facebook_logo"/>
                    <div className="header_input">
                        <SearchIcon fontSize ="medium"/>
                        <input placeholder="Facebook search" type='text'/>
                    </div>
                </div>

                <div className="header_mid">
                   <div className="header_options header_options--active">
                       <HomeIcon fontSize="large"/>
                   </div>
                   <div className="header_options">
                       <FlagIcon fontSize="large"/>
                   </div>
                   <div className="header_options">
                       <SubscriptionsOutlinedIcon fontSize="large"/>
                   </div>
                   <div className="header_options">
                       <StorefrontOutlinedIcon fontSize="large"/>
                   </div>
                   <div className="header_options">
                       <SupervisedUserCircleOutlinedIcon fontSize="large"/>
                   </div>
                </div>

                <div className="header_right">
                    <div className="header_info">
                        <Avatar src="sara_photo.jpg" />
                        <h4>sara latrache</h4>
                    </div>

                <IconButton >
                    <AddIcon/>
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                </div>
                
            </div>
    )
}

export default header
