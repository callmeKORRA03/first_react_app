import React from "react";

const CssPlayGround = () => {

      let harryStyles = {
            color: "blue",
            backgroundColor: "red",
            padding: "50px",
            height: "300px",
            width: "300px",
            fontSize: "20px"
      }
  return (
    <React.Fragment>
      <h1 className="header"> First Component Created </h1>
      <h3 style={{ color: "red", background: "white" }}>Second Code</h3>
      <h4 style={harryStyles}>Third Code</h4>
    </React.Fragment>
  );
};
export default CssPlayGround;
