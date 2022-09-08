import Button from "../Button/Button";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const openNav = () => {
    setNavOpen(!navOpen);
  };
  useEffect(() => {
    let navDiv=document.getElementsByClassName("nav-a-div")[0]
    if (window.innerWidth < 1024) {
          navOpen == false
      ? (navDiv.style.visibility =
              "hidden")
            
      : (navDiv.style.visibility =
              "visible");
      
               navOpen == false
      ? (document.getElementsByClassName("close-icon")[0].style.visibility =
          "hidden")
      : (document.getElementsByClassName("close-icon")[0].style.visibility =
              "visible");
      
    }

  }, [navOpen]);
  return (
    <header>
          <div className='App'>

      <nav className="nav">
        <img src="./images/logo.svg" alt="Logo" />
        <FontAwesomeIcon
          onClick={openNav}
          className="hamburger-icon"
          icon={faBars}
          color="white"
        />
        <div className={`nav-a-div ${navOpen?"open":null}`}>
                  <FontAwesomeIcon
          onClick={openNav}
          className="close-icon"
          icon={faX}
          color="white"
        />
          <a className="nav-a" href="#">
            Products
          </a>
          <a className="nav-a" href="#">
            Features
          </a>
          <a className="nav-a" href="#">
            {" "}
            About
          </a>
          <a className="nav-a" href="#">
            {" "}
            Contact
          </a>
          <div className="auth-nav-a">
            <a className="nav-a login-nav" href="#">
              {" "}
              Login
            </a>
            <span className="nav-divider">|</span>

            <Button buttonText={"Register"} />
          </div>
        </div>
        </nav>
        </div>

    </header>
  );
};
export default Nav;
