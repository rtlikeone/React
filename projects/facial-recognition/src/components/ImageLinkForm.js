function ImageLinkForm({ onInputChange, onButtonSubmit }) {
  return (
    <div className="col-lg-8 col-md-8 col-sm col-xs my-2 text-center">
      <div className="border rounded p-5">
        <h2 className="font-weight-bold">Upload an image</h2>
        <p className="font-weight-light text-muted">
          {"Give us a direct link to a file on the web"}
        </p>

        <div className="input-group mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Image url.."
            onChange={onInputChange}
          />
          <div className="input-group-append">
            <button
              className="input-group-text upload-btn"
              onClick={onButtonSubmit}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
