import React from "react";

const DProps = ({textContent1, header1, summary}) => {
  return (
    <React.Fragment>
              <hr />
              <h1> {header1} </h1>
              <h2> Using Destructured Props</h2>
              <p>  {textContent1} </p>
             <h4> {summary} </h4>
    </React.Fragment>
  );
};
export default DProps;
