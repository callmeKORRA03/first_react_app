import React from "react";

const DProps2 = ({image1, image2,alt1, alt2}) => {
      return (
            <React.Fragment>
                  <hr />
                  <h2>Destructured Props with Images</h2>

                  <h3> First Image</h3>
                  <img src={image1} alt={alt1}/>

                  <h3> Second image </h3>
                  <img src={image2} alt={alt2}/>
            </React.Fragment>
      )
}
export default DProps2