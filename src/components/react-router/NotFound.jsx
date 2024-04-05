import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const naviagate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      naviagate("/");
    }, 5000);
  });
  return (
    <>
      <h1>Broken Link</h1>
      <p>
        click <Link to="/">Here</Link> to naviagate to Home page
      </p>
      <button
        onClick={() => {
          naviagate("/about");
        }}
      >
        5 sec ke andar click karo to about par jao nhi to automatic home page
        par jaoge
      </button>
      {/* ham yaha Link comonent nhi use kar rahe hai to useNavigate hook ka use kar lenge  */}
    </>
  );
}

export default NotFound;
