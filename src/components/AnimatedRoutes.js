import React, { useState } from "react";

import News from "./News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter,
} from "react-router-dom";
import SignUp from "./SignUp";
import Feedback from "./Feedback";
import About from "./About";
import Logout from "./Logout";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import Login from "./Login";
import AboutUs from "./AboutUs";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Disclaimer from "./Disclaimer";
import Summary from "./Summary";

const AnimatedRoutes = (props) => {
  const pageSize = 5;
  const apiKey = "af96914f4d0d49e6b3149fc1c6fa764a";
  // process.env.REACT_APP_NEWS_API

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

  // const [mode, setMode] = useState("light");
  const [backg, setBackg] = useState("backgroundColor: white");
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <News
              mode={props.mode}
              setProgress={props.setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </motion.div>
        </Route>
        <Route exact path="/business">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
          >
            <News
              mode={props.mode}
              setProgress={props.setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </motion.div>
        </Route>
        <Route exact path="/entertainment">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
          >
            <News
              mode={props.mode}
              setProgress={props.setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </motion.div>
        </Route>
        <Route exact path="/general">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
          >
            <News
              mode={props.mode}
              setProgress={props.setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </motion.div>
        </Route>
        <Route exact path="/health">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
          >
            <News
              mode={props.mode}
              setProgress={props.setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </motion.div>
        </Route>
        <Route exact path="/science">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
          >
            <News
              mode={props.mode}
              setProgress={props.setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </motion.div>
        </Route>
        <Route exact path="/sports">
          <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}

            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <News
              mode={props.mode}
              setProgress={props.setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </motion.div>
        </Route>
        <Route exact path="/technology">
          <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}

            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <News
              mode={props.mode}
              setProgress={props.setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </motion.div>
        </Route>

        <Route exact path="/SignUp">
          <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}

            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <SignUp />
          </motion.div>
        </Route>

        <Route exact path="/Login">
          <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}

            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <Login />
          </motion.div>
        </Route>

        <Route exact path="/Feedback">
          <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}

            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Feedback />
          </motion.div>
        </Route>

        <Route exact path="/About">
          <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}

            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <About />
          </motion.div>
        </Route>

        <Route exact path="/Logout">
          <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}

            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Logout />
          </motion.div>
        </Route>

        <Route exact path="/AboutUs">
          <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}

            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <AboutUs />
          </motion.div>
        </Route>

        <Route exact path="/Privacy">
          <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}

            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Privacy />
          </motion.div>
        </Route>

        <Route exact path="/Terms">
          <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}

            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Terms />
          </motion.div>
        </Route>

        <Route exact path="/Disclaimer">
          <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}

            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Disclaimer />
          </motion.div>
        </Route>

        <Route exact path="/Summary">
          <motion.div
            // initial={{ width: 0 }}
            // animate={{ width: "100%" }}
            // exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}

            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Summary />
          </motion.div>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
