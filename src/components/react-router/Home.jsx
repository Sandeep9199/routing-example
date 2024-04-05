import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Hello I am From Home</h1>
      <ul>
        <li>
          <Link to="/product/1">Product 1</Link>
        </li>
        <li>
          <Link to="/product/2">Product 2</Link>
        </li>
        <li>
          <Link to="/product/3">Product 3</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
