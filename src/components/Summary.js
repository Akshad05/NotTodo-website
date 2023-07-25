import React from "react";
import { summary } from "./News";

import Spinner from "./Spinner";
import { useState, useEffect } from "react";

const Summary = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    //   eslint-disable-next-line
  }, []);

  return (
    <div className="summaryContainer">
      <h2>Summary</h2>
      {loading && <Spinner />}
      {!loading && <p>{summary}</p>}
    </div>
  );
};

export default Summary;
