import React from "react";

const Multimedia = () => {
  return (
    <React.Fragment>
              <h2>Working With Multimedia</h2>
              
              <h3>Image</h3>
              <img src="/Assets/Image/car.jpg" alt="A picture of a car" height={200} />
              
              <h3> Audio </h3>

              <audio controls>
                  <source src="/Assets/Audio/rema.mp3"/>
              </audio>
              <h3>Video</h3>

              <video controls width={300}>
                  <source src="/Assets/Video/video2.mp4"/>
              </video>

    </React.Fragment>
  );
};
export default Multimedia