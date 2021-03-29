function Register({ onRouteChange }) {
  const handleOnRouteChange = () => {
    onRouteChange("home");
  };

  return (
    <div className="col-lg-8 col-md-8 col-sm col-xs my-2">
      <div className="border rounded p-5">
        <form>
          <div class="form-group row">
            <label for="inputName" class="col-sm-2 col-form-label">
              Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputName"
                placeholder="Name"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="inputEmail3"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword3"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={handleOnRouteChange}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
