function FaceRecognition({ imageUrl, boxData }) {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
      {imageUrl && (
        <img
          id="inputimage"
          src={imageUrl}
          alt="img to detect face"
          width="500px"
          height="auto"
        />
      )}
      <div
        className="bounding-box"
        style={{
          top: boxData.top,
          right: boxData.right,
          bottom: boxData.bottom,
          left: boxData.left,
        }}
      ></div>
      {console.log("FaceRecognition.js boxData")}
      {console.log(boxData)}
    </div>
  );
}

export default FaceRecognition;
