import React from "react";
import loader from "../../Assets/Images/spinner.gif";
const Loading = () => {
  return (
    <>
      <div className=" w-60 h-full mx-auto">
        <img src={loader} alt="" />
      </div>
    </>
  );
};

export default Loading;
