import React, { useState } from "react";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation";
import ImageLinkForm from "./components/ImageLinkForm";
import Rank from "./components/Rank";
import FaceRecognition from "./components/FaceRecognition";
import "./sass/main.scss";

const app = new Clarifai.App({
  apiKey: "*****************",
});

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onInputChange = (e) => {
    const imageSrc = e.target.value;
    setInput(imageSrc);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);

    // More models here:
    // https://github.com/Clarifai/clarifai-javascript/blob/master/src/index.js
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row justify-content-center text-center my-4">
          <Rank />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
          <FaceRecognition imageUrl={imageUrl} />
        </div>
      </div>
    </>
  );
}

export default App;
