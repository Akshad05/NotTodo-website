import React from "react";
import { ele } from "./Admin_Nottodo";
import "./style.css";
import { useHistory } from "react-router-dom";
import BackdropAck from "./BackdropAck";
const SideAck = () => {
  const history = useHistory();
  const closeAck = () => {
    history.push("/");
  };
  return (
    <>
      <BackdropAck />

      <div className="ackCont">
        <button className="ackCloseButton" onClick={closeAck}>
          <i class="fa-solid fa-circle-xmark"></i>
        </button>
        <div className="ackImg">
          <i class="fa-solid fa-users fa-beat-fade fa-2xl"></i>
        </div>
        <div className="sideAck">
          {ele.acknowledgment.map((ack) => {
            return (
              <li className="sideTextAck">
                <i class="fa-solid fa-circle-user fa-xl"></i>
                <div className="ackId">
                  <h7>{ack.username}</h7>

                  <small>{ack.userEmail}</small>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default SideAck;
