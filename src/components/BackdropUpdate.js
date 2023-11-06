import React from "react";

const BackdropUpdate = ({ sideUpdate, closeSideUpdate }) => {
  return (
    <div
      className={sideUpdate ? "backdropAdd backdropAdd--open" : "backdropAdd"}
      onClick={closeSideUpdate}
    ></div>
  );
};

export default BackdropUpdate;
