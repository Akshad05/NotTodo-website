import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  //using promises
  const history = useHistory();
  useEffect(() => {
    fetch("/Logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        history.push("/Login", { replace: true });
        if (res.status != 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export default Logout;
