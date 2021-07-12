import { Avatar } from '@material-ui/core';
import React from 'react'
import "./../../Style/Story.css";
function Story({image, profilSrc, title}) {
    return (
        <div style={{ backgroundImage : `url(${image})`}} className="story">
         <Avatar className="story_avatar" src={profilSrc} />
         <h4>{title}</h4>   
        </div>
    )
}

export default Story
