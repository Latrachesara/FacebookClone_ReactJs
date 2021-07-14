import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./../../Style/MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useSelector, useDispatch } from "react-redux";
function MessageSender() {
  const PF = process.env.REACT_APP_PICTURES_PATH;
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const auth = useSelector((state) => state.auth);
  const [image, setImage] = useState(null);
  const [ImageToShow, setImageToShow] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    //some clever db stuff
    setInput("");
    setImageUrl("");
  };
  useEffect(() => {
    console.log(image);
    if (image) {
      setImageToShow(URL.createObjectURL(image));
    }
  }, [image]);
  return (
    <div className="messageSender">
      <div className="messageSender_top row">
        <img src={PF + "NoAvatar.png"} className="post_avatar_create" />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender_input col"
            placeholder={`what's on your mind!`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
            className="col"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>{" "}
        </form>
        {ImageToShow && (
          <div>
            <img src={ImageToShow} alt="test" className="Add-Photo"></img>
          </div>
        )}
      </div>

      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <VideocamIcon style={{ color: "red" }} />

          <h3> Live video</h3>
        </div>

        <label for="file">
          <div className="messageSender_option" for="file">
            <PhotoLibraryIcon style={{ color: "green" }} for="file" />
            <h3> Photo/Video </h3>
          </div>
        </label>

        <input
          type="file"
          name="file"
          id="file"
          multiple
          accept="image/*,video/*"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />

        <div className="messageSender_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
