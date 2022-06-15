import React from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar(props) {
  const location  = useLocation();
  return (
    <header>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <img src={process.env.PUBLIC_URL +"/logo.png"} height="75"/>
      <h1 className="me-4">{props.appName}</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/'?'active':''}`} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/about'?'active':''}`} to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/contact'?'active':''}`} to="/contact">Contact</Link>
          </li>
        </ul>
        {/* <Outlet /> */}
        <div className="d-flex">
          <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode} />
              <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </div>
  </nav>
  </header>
  );
}

export default Navbar;