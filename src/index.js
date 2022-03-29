import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import Broken from "./components/Broken";
import Fixed from "./components/Fixed";

function Application() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    console.log(`likes count: ${likes}`);
    document.body.className = `bg--${likes % 2}`;
    // const timeout = setTimeout(() => setLikes(prev => prev - 1), 1000);
    // return () => clearTimeout(timeout); // clears the timer set above
  }, [likes]);

  return (
    <div onClick={() => setLikes((prev) => prev + 1)}>
      {likes > 0 ? <Fixed>{likes}</Fixed> : <Broken />}
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
