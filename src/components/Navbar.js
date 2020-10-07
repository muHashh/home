import React, { useState, useEffect } from "react";

const Navbar = (props) => {

  const [isTop, setIsTop] = useState(true);
  const [isNavbarToggled, setIsNavbarToggled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const istop = window.scrollY < 20;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);

  return (
    <nav
      id="navbar"
      className={`navbar navbar-expand-lg fixed-top navbar-dark 
        ${(isNavbarToggled || !isTop) ? "transparent" : "bg-transparent"} 
      `}
    >
      <a className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        Home
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setIsNavbarToggled(!isNavbarToggled)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              <b>Projects</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              <b>About</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;