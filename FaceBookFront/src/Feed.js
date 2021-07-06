import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilPic="https://assets.audiomack.com/xavi05/de8c089bc1e8e68d6ed825cead55caa4308dbddb829daa2838966f5054ded440.jpeg?width=1000&height=1000&max=true"
        message="Wow this works!"
        timestamp="this is a timestamp"
        username="stefano germanotta"
        image="sara2_photo.jpg"
      />
      <Post
        profilPic="sara_photo.jpg"
        message="Wow this works!"
        timestamp="this is a timestamp"
        username="sara latrache"
        image="sara3_photo.jpg"
      />
      <Post
        profilPic="amine.jpg"
        message="Wow this works!"
        timestamp="this is a timestamp"
        username="amine beji"
        image="sara4_photo.jpg"
      />
    </div>
  );
}

export default Feed;
