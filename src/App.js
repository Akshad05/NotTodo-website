import "./App.css";

import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer";
import BackdropAdd from "./components/BackdropAdd";
import BackdropUpdate from "./components/BackdropUpdate";

// import { useHistory } from "react-router-dom";

// import News from "./components/News";
import "./components/style.css";
import newsIcon from "./components/newsIcon";
// import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Admin_Nottodo from "./components/Admin_Nottodo";

const App = () => {
  const pageSize = 5;
  const apiKey = "092870643fc44645ad6a0fd3f6463372";
  // process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);

  const toggleFunction = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundImage = `url("https://cdn.statically.io/img/i.pinimg.com/736x/17/06/b6/1706b65720ee6671eaa6bf5db59a4d3a.jpg")`; //"#150020"; //#360036
      // document.body.style.backgroundImage = `url("https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg")`;
      showAlert("success", "Dark mode activated");
    } else {
      setMode("light");
      document.body.style.backgroundImage = `url("https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg")`;
      showAlert("success", "Light mode activated");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  useEffect(() => {
    document.body.style.backgroundImage = `url("https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg")`;
  }, []);

  const [mode, setMode] = useState("light");
  const [sidebar, setSidebar] = useState(false);
  const [sideAdd, setSideAdd] = useState(false);
  const [sideUpdate, setSideUpdate] = useState(false);
  const [sideAck, setSideAck] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };
  const toggleSideAdd = () => {
    setSideAdd((prevState) => !prevState);
  };
  const toggleSideUpdate = () => {
    setSideUpdate((prevState) => !prevState);
  };
  const toggleSideAck = () => {
    setSideAck((prevState) => !prevState);
  };

  // let history = useHistory();

  // const routeChange = () => {
  //   history.push("/Login");
  // };

  // window.addEventListener("DOMContentLoaded", (event) => {
  //   const signInButton = document.querySelector("#signInBtn");
  //   const signUpButton = document.querySelector("#signUpBtn");

  //   signUpButton.addEventListener("click", () => {

  //   });

  //   signInButton.addEventListener("click", () => {

  //   });
  // });

  return (
    <div>
      <Router>
        <NavBar
          toggle={toggleFunction}
          mode={mode}
          openSidebar={toggleSidebar}
          // openSideAdd={toggleSideAdd}
        />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <AnimatedRoutes
          mode={mode}
          setProgress={setProgress}
          sideAdd={sideAdd}
          sideUpdate={sideUpdate}
          openSideAdd={toggleSideAdd}
          openSideUpdate={toggleSideUpdate}
          // openSideAck={toggleSideAck}
          // sideAck={sideAck}
        />

        <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
        {/* <BackdropAdd sideAdd={sideAdd} closeSidebar={toggleSideAdd} /> */}
        <Sidebar sidebar={sidebar} />
        {/* <Admin_Nottodo sideAdd={sideAdd} /> */}
        <newsIcon />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
