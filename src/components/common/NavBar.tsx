import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Legal Management App - Amplify 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " to="/clients">
                Example 1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/lawyers">
                Example 2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/legalDocuments">
                Legal Documents
              </NavLink>
            </li>
          </ul>
          <Link to="/" className="btn btn-outline-primary">
            Main page
          </Link>
        </div>
      </div>
    </nav>
  );
};
