import React from "react";

const BackdropAdd = ({ sideAdd, closeSideAdd }) => {
  return (
    <div
      className={sideAdd ? "backdropAdd backdropAdd--open" : "backdropAdd"}
      onClick={closeSideAdd}
    ></div>
  );
};

export default BackdropAdd;
