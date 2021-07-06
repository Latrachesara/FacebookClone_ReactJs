import React from "react";
import "./Widgets.css";
function Widgets() {
  return (
    <div className="widgets">
      <iframe
        className="frame"
        title="widg"
        width="250"
        height="150"
        src="https://www.youtube.com/embed/B-kxUMHBxNo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Widgets;
