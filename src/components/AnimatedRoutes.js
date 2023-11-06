import React, { useState } from "react";
import SideAck from "./SideAck";
import Admin_Nottodo from "./Admin_Nottodo";
import { Switch, Route, useLocation } from "react-router-dom";
import SignUp from "./SignUp";
import Feedback from "./Feedback";
import About from "./About";
import Logout from "./Logout";
import Chatgpt from "./Chatgpt";

import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import Login from "./Login";
import AboutUs from "./AboutUs";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Disclaimer from "./Disclaimer";
// import Summary from "./Summary";
import SideUpdate from "./SideUpdate";
// import AdminSignUp from "./AdminSignUp";
// import AdminLogin from "./AdminLogin";

const AnimatedRoutes = (props) => {
  // process.env.REACT_APP_NEWS_API

  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <motion.div>
            <Admin_Nottodo
              mode={props.mode}
              key="admin_Nottodo"
              category="Admin"
              sideAdd={props.sideAdd}
              sideUpdate={props.sideUpdate}
              sideAck={props.sideAck}
              openSideAdd={props.openSideAdd}
              openSideUpdate={props.openSideUpdate}
              openSideAck={props.openSideAck}
            />
          </motion.div>
        </Route>

        <Route exact path="/update/:id">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <SideUpdate />
          </motion.div>
        </Route>

        <Route exact path="/chatgpt">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 15,

                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Chatgpt />
          </motion.div>
        </Route>

        <Route exact path="/ack/:id">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <SideAck openSideAck={props.openSideAck} sideAck={props.sideAck} />
          </motion.div>
        </Route>

        <Route exact path="/SignUp">
          <motion.div
            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <SignUp />
          </motion.div>
        </Route>

        <Route exact path="/Login">
          <motion.div
            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <Login />
          </motion.div>
        </Route>

        <Route exact path="/Feedback">
          <motion.div
            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Feedback />
          </motion.div>
        </Route>

        <Route exact path="/About">
          <motion.div
            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <About />
          </motion.div>
        </Route>

        <Route exact path="/Logout">
          <motion.div
            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Logout />
          </motion.div>
        </Route>

        <Route exact path="/AboutUs">
          <motion.div
            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <AboutUs />
          </motion.div>
        </Route>

        <Route exact path="/Privacy">
          <motion.div
            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Privacy />
          </motion.div>
        </Route>

        <Route exact path="/Terms">
          <motion.div
            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Terms />
          </motion.div>
        </Route>

        <Route exact path="/Disclaimer">
          <motion.div
            initial={{ opacity: 0, transition: { duration: 0.8 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <Disclaimer />
          </motion.div>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
