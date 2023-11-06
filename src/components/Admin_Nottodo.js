import React, { useEffect, useState } from "react";
import { userType } from "./SignUp";

import { useHistory } from "react-router-dom";
import SideAdd from "./SideAdd";
import TodoItem from "./TodoItem";

import { useFormik } from "formik";
import BackdropAdd from "./BackdropAdd";

let title;
let desc;
let id;
let dueDate;
let priority;
let ele = {};

const Admin_Nottodo = (props) => {
  const [userData, setUserData] = useState("");
  const [sort, setSort] = useState("");

  const history = useHistory();
  const initialValues = {
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { title, description, dueDate, priority } = values;

    const res = await fetch("/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Unsuccessful addition");
      console.log("Unsuccessful addition");
    } else {
      window.alert("Sucessfully added");
      console.log("Sucessfully added");

      window.location.reload();
    }
  };

  const [readlist, setReadlist] = useState([]); //variable declared outside inorder to use to iterate readlist below to print notTodo lists
  const getList = async () => {
    try {
      const res = await fetch("/read", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setReadlist(data.list); // Update the state with the received data
    } catch (err) {
      console.log(err);
      history.push("/Login");
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch("/userData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status == 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/Login");
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NotTodo`;
    // adminAuth();
    fetchData();
    getList();
    console.log(userType);
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleClick = (element) => {
    title = element.title;
    desc = element.description;
    id = element._id;
    priority = element.priority;
    ele = element;
    dueDate = element.dueDate;

    console.log(element.summary);
    setItem(element);
    console.log(item);
  };

  const updateSort = async () => {
    const res = await fetch("/updateSort", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sort: sort,
      }),
    });

    // const data = await res.json();

    if (res.status === 200) {
      console.log("Successfully updated");
      window.location.reload();
    } else if (res.status === 404) {
      window.alert("U update");
    } else {
      console.log("Unsuccessful update");
    }
  };

  const handleChangeSort = async (event) => {
    setSort(event.target.value);

    console.log(sort);
  };
  useEffect(() => {
    updateSort();
  }, [sort]);
  const [item, setItem] = useState(); //To send to sideAck component to fetch acknowledgements

  return (
    <>
      <BackdropAdd sideAdd={props.sideAdd} closeSideAdd={props.openSideAdd} />
      <SideAdd
        sideAdd={props.sideAdd}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
        PostData={PostData}
      />
      <div className="headCont">
        <div className="headingImg"></div>
        <h1 className="text-center heading">NotTodo - {userData.type} Panel</h1>
      </div>
      <div className="listCont">
        {readlist.map((element) => {
          return (
            <div key={element._id} onClick={() => handleClick(element)}>
              <TodoItem
                mode={props.mode}
                userEmail={userData.email}
                username={userData.username}
                userType={userData.type}
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                dueDate={element.dueDate ? element.dueDate : ""}
                _id={element._id}
                sideUpdate={props.sideUpdate}
                closeSideUpdate={props.openSideUpdate}
                openSideAck={props.openSideAck}
                sideAck={props.sideAck}
                ack={element.acknowledgment}
              />
            </div>
          );
        })}
      </div>
      {userData.type === "Admin" ? (
        <button className="addButton" onClick={props.openSideAdd}>
          <i class="fa-solid fa-plus fa-flip"></i>
        </button>
      ) : null}

      <div className="sortCont">
        <label>Sort BY </label>
        <div className="sortRadio">
          <div className="radioComp">
            <input
              type="radio"
              name="sort"
              value="priority"
              onChange={(event) => {
                handleChangeSort(event);
              }}
            />
            Priority
          </div>
          <div className="radioComp">
            <input
              type="radio"
              name="sort"
              value="dueDate"
              onChange={(event) => {
                handleChangeSort(event);
              }}
            />
            Due Date
          </div>
        </div>
      </div>
    </>
  );
};
export { title, desc, id, dueDate, priority };
export { ele };
export default Admin_Nottodo;
