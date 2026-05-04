import React from "react";
import { useState } from "react";

const State = () => {

      const [content, setContent] = useState({
            artist: "Ajebo Hustlers",
            song: "Barawo ft Davido",
            streams: "50 million Monthly Streams ",
            imgContent: "/Assets/Image/barrawo.jpg"
      })

      const Llona = () => {
            setContent({
                  artist: "Llona",
                  song: "Bla Bla Black Sheep",
                  streams: "20 million Monthly Streams"
            })
      }

      const Victony = () => {
            setContent({
                  artist: "Victony",
                  song: "Soweto ft Rema and Don Toliver",
                  streams: "10 million Monthly Streams"
            })
      }

      const Ckay = () => {
            setContent({
                  artist: "Ckay",
                  song: "Love Nwatiti",
                  streams: "20 million Monthly Streams"
            })
      }

      const AjbHustlers = () => {
            setContent({
                   artist: "Ajebo Hustlers",
                   song: "Barawo ft Davido",
                   streams: "50 million Monthly Streams "
            })
      }
      
      return (
            <React.Fragment>
                  <h2> State Management with Text Content</h2>  
                  
                  <h1> Artist : {content.artist} </h1>
                  <h3>Song : {content.song} </h3>
                  <p> {content.streams} </p>

                  <img src={content.imgContent} />
                  <br/>

                  <button onClick={Llona}> Llona </button>
                  <button onClick={Victony}> Victony </button>
                  <button onClick={Ckay}>Ckay</button>
                  <button onClick={AjbHustlers}> Ajebo Hustlers </button>
            </React.Fragment>
      )
}
export default State