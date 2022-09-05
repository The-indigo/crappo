import Button from "../Button/Button";
import "./Nav.css"


const Nav = () => {
  return (
    <header>
      <nav>
        <img src="./images/logo.svg" alt="Logo"/>
        <div>
          <a class="nav-a" href="#">
            {" "}
            Products
          </a>
          <a class="nav-a" href="#">
            {" "}
            Features
          </a>
          <a class="nav-a" href="#">
            {" "}
            About
          </a>
          <a class="nav-a" href="#">
            {" "}
            Contact
          </a>
          <a class="nav-a" href="#">
            {" "}
            Login
                  </a>
          <span>|</span>
         
          <Button buttonText={"Register"}/>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
