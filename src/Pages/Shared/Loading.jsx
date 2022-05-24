import React from "react";
import loader from "../../Assets/Images/spinner.gif";
const Loading = () => {
  return (
    <>
      <div className="mt-16 w-60 h-full mx-auto">
        <img src={loader} alt="" />
      </div>
    </>
  );
};

export default Loading;
