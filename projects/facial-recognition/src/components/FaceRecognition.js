function FaceRecognition({ imageUrl }) {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="img to detect face"
          width="500px"
          height="auto"
        />
      )}
    </div>
  );
}

export default FaceRecognition;
