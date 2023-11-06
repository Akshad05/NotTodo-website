import React from "react";

import { Link } from "react-router-dom";

const TodoItem = (props) => {
  const deleteItem = async (id) => {
    console.log(id);
    const res = await fetch(`/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      window.alert("Sucessfully Deleted");
      window.location.reload();
    } else {
      window.alert("Unsucessful Delete");
    }
  };

  const acknowledge = async (listId, userEmail, username) => {
    const res = await fetch("/acknowledge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listId: listId,
        userEmail: userEmail,
        username: username,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Unsuccessful Acknowledgment");
      console.log("Unsuccessful Acknowledgment");
    } else if (res.status === 405) {
      window.alert("Already Acknowledged");
    } else {
      window.alert("Sucessfully Acknowledged");
      console.log("Sucessfully Acknowledged");
    }
  };

  return (
    <>
      <div className="listTodo">
        <div className="listImg"></div>
        <div>
          <div className="todoTitle"> {props.title}</div>
          <div class="collapse" id={`ai-${props._id}`}>
            <div class="card card-body todoInfo">
              <div className="todoDesc"> {props.description}</div>
            </div>
            <div class="card card-body todoDate">
              <div className=""> Due Date :{props.dueDate}</div>
            </div>
          </div>
          <div className="listController">
            <button className="bttn">
              <a
                style={{ color: "white" }}
                data-bs-toggle="collapse"
                href={`#ai-${props._id}`}
                //   href={props._id}
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Read More
              </a>
            </button>

            {props.userType === "Admin" ? (
              <button
                className="bttn"
                onClick={() => {
                  deleteItem(props._id);
                }}
              >
                Delete
              </button>
            ) : null}

            {console.log(props.title)}
            {props.userType === "Admin" ? (
              <Link to={`/update/${props._id}`}>
                <button className="bttn">Update</button>
              </Link>
            ) : null}

            {console.log(props.title)}
            {props.userType === "User" ? (
              <button
                className="bttn"
                onClick={() => {
                  acknowledge(props._id, props.userEmail, props.username);
                }}
              >
                Acknowledge
              </button>
            ) : null}

            {props.userType === "Admin" ? (
              <Link to={`/ack/${props._id}`}>
                <button className="bttn" onClick={props.openSideAck}>
                  Ack List
                </button>
              </Link>
            ) : null}

            <Link to="/chatgpt">
              <button className="bttn">Why?</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
