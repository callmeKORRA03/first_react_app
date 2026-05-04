import React from "react";
import rema from "../../Assets/Image/logo.png"
import song1 from "../../Assets/Audio/venus.mp3"
import vid1 from "../../Assets/Video/video2.mp4"

const SrcMultimedia = () => {
  return (
    <React.Fragment>
      <hr />
              <h2>Using Multimedia from an Src Folder</h2>
              
              <h3>Image</h3>
              <img src={rema} alt="Amazon Logo" />
              
              <h3>Audio</h3>
              <audio controls>
                  <source src={song1}/>
              </audio>

              <h3>Video</h3>
              <video controls width={300}>
                  <source src={vid1}/>
              </video>
    </React.Fragment>
  );
};
export default SrcMultimedia;
