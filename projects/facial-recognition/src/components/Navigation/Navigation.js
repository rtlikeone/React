import bot from "../../img/bot.png";

function Navigation({ route, onRouteChange, isLoggedIn }) {
  const handleOnRouteChange = () => {
    onRouteChange("signin");
  };
  const handleRegister = () => {
    onRouteChange("register");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={bot} alt="bot face" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ml-auto">
            {isLoggedIn ? (
              <li className="nav-item">
                <a
                  onClick={handleOnRouteChange}
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Sign out
                </a>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a
                    onClick={handleOnRouteChange}
                    className="nav-link"
                    aria-current="page"
                    href="#signin"
                  >
                    Sign in
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={handleRegister}
                    className="nav-link"
                    href="#register"
                  >
                    Register
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
