import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>Homepage</div>
      <button onClick={() => console.log("click me")}>click me</button>
      <Link to="/second">To second page</Link>
    </div>
  );
};

export default Home;
