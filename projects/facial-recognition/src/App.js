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
  const [boxData, setBoxData] = useState({});

  const calculateFaceLocation = (data) => {
    const box = data;

    console.log("App.js data");
    console.log(data);

    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    const newBox = {
      left: box.left_col * width,
      top: box.top_row * height,
      right: width - box.right_col * width,
      bottom: height - box.bottom_row * height,
    };
    setBoxData(newBox);
  };

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
        calculateFaceLocation(
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
          <FaceRecognition imageUrl={imageUrl} boxData={boxData} />
        </div>
      </div>
    </>
  );
}

export default App;
