function Signin({ onRouteChange }) {
  const handleOnRouteChange = () => {
    onRouteChange("home");
  };

  return (
    <div className="col-lg-8 col-md-8 col-sm col-xs my-2">
      <div className="border rounded p-5">
        <form>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleOnRouteChange}
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
