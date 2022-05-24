import React from "react";
import { Link } from "react-router-dom";
import gif from "../../Assets/Images/CodePen-404-Page.gif";
const NotFound = () => {
  return (
    <div className="mx-auto w-full bg-white">
      <img className="mx-auto w-full md:w-1/2 mt-4" src={gif} alt="not found" />
      <div className="mx-auto w-36 mb-8">
        <Link
          to="/"
          type="button"
          className="btn btn-primary btn-outline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
