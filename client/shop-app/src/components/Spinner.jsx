import React from "react";

const Spinner = ({ spinnerType }) => {
  return (
    <>
      {spinnerType === "main-spinner" ? (
        <div className="main-spinner-circle"></div>
      ) : (
        <div className="main-mini-spinner-circle"></div>
      )}
    </>
  );
};

export default Spinner;
