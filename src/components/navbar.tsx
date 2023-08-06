"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import favicon32 from "../../public/favicon-32x32.png";

const navClassString = "navbar navbar-expand-lg navbar-light fixed-top py-3";
const navClassStringShunk = navClassString + " navbar-shrink";

export default function Navbar() {
  const [navClass, setNavClass] = useState(navClassString);

  let ref = useRef(null);

  // Value possibly null error, that's alright its reference is established once the
  // page is loaded.
  function navLinkClick() {
    ref.current.click();
  }

  useEffect(() => {
    // Scoll event listener to perform class modification when user scrolls
    document.addEventListener("scroll", () => {
      window.scrollY === 0
        ? setNavClass(navClassString)
        : setNavClass(navClassStringShunk);
    });
    // Load Bootstrap Collapse JS plugin after the document has loaded
    typeof document !== undefined
      ? require("bootstrap/js/dist/collapse")
      : null;
  });

  return (
    <nav className={navClass} id="mainNav">
      {" "}
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">
          <Image className="img-fluid px-lg-1" src={favicon32} alt="logo" />
          Hot Dads BBQ | Rocklin, CA
        </a>
        <button
          ref={ref}
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <a
                data-to-scrollspy-id="about"
                className="nav-link"
                href="#about"
                onClick={navLinkClick}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                data-to-scrollspy-id="specialties"
                className="nav-link"
                href="#specialties"
                onClick={navLinkClick}
              >
                Specialties
              </a>
            </li>
            <li className="nav-item">
              <a
                data-to-scrollspy-id="upcoming"
                className="nav-link"
                href="#upcoming"
                onClick={navLinkClick}
              >
                Events
              </a>
            </li>
            <li className="nav-item">
              <a
                data-to-scrollspy-id="portfolio"
                className="nav-link"
                href="#portfolio"
                onClick={navLinkClick}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                data-to-scrollspy-id="contact"
                className="nav-link"
                href="#contact"
                onClick={navLinkClick}
              >
                Become a Sponsor
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
