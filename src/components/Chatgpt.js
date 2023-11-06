import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

import { title } from "./Admin_Nottodo";
import { useEffect, useState } from "react";

import BackdropAck from "./BackdropAck";

const Chatgpt = () => {
  const history = useHistory();
  const [response, setResponse] = useState("");

  // Sending prompt text
  const sendPrompt = async () => {
    const res = await fetch("/chatgpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `${title}. Why?`,
      }),
    });

    if (res.status === 200) {
      const result = await res.json();
      console.log(result);

      setResponse(result.result);
      console.log("Successfully chat");
    } else {
      window.alert("Unsuccessful chat");
      console.log("Unsuccessful chat");
    }
  };
  const closeAck = () => {
    history.push("/");
  };
  useEffect(() => {
    sendPrompt();
  }, []);

  return (
    <>
      <BackdropAck />
      <button className="ackCloseButton" onClick={closeAck}>
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
      <div className="Update" style={{ marginBottom: "30px" }}>
        <div
          className="sideUpdate"
          style={{
            border: "2px solid red",
            width: "800px",
            padding: "40px",
            overflow: "auto",
          }}
        >
          {response}
        </div>
      </div>
    </>
  );
};
export default Chatgpt;
