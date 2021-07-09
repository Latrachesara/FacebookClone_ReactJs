import React from "react";
import LoggedOutHeader from "./../Header/LoggedOutHeader";
function LoggedOutrapperWrapper(props) {
  return (
    <div>
      <LoggedOutHeader />
      <div>{props.children}</div>
    </div>
  );
}

export default LoggedOutrapperWrapper;
