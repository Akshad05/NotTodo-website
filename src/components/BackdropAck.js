import React from "react";

const BackdropAck = ({ closeSideAck }) => {
  return (
    <div
      // className={sideAck ? "backdropAck backdropAdd--open" : "backdropAck"}
      className="backdropAck backdropAdd--open"
      onClick={closeSideAck}
    ></div>
  );
};

export default BackdropAck;
