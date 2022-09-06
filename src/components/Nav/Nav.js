import Button from "../Button/Button";
import "./Nav.css"


const Nav = () => {
  return (
    <header>
      <nav className="nav">
        <img src="./images/logo.svg" alt="Logo"/>
        <div className="nav-a-div">
          <a className="nav-a" href="#">
            {" "}
            Products
          </a>
          <a className="nav-a" href="#">
            {" "}
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
          <a className="nav-a login-nav" href="#">
            {" "}
            Login
                  </a>
          <span className="nav-divider">|</span>
         
          <Button  buttonText={"Register"}/>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
