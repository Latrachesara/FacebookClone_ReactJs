import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import SotrefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import React from "react";
import "./../../Style/SideBar.css";
import SideBarRow from "./SideBarRow";
import { useSelector } from "react-redux";

function SideBar() {
  const PICTURES_PATH = process.env.PICTURES_PATH;
  const { Auth } = useSelector((state) => state);
  return (
    <div className="sidebar">
      <SideBarRow
        src={
          Auth.user?.profilePicture
            ? Auth.user?.profilePicture
            : PICTURES_PATH + "noAvatar.png"
        }
        title="sara latrache"
      />
      <SideBarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 infromation Center"
      />
      <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SideBarRow Icon={PeopleIcon} title="Friends" />
      <SideBarRow Icon={ChatIcon} title="Messenger" />
      <SideBarRow Icon={SotrefrontIcon} title="MarketPlace" />
      <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} title="MarketPlace" />
    </div>
  );
}

export default SideBar;
