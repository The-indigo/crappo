import "./Button.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Button = ({buttonText,white,font}) => {
    return (
        <>
            <button className={`button ${white ? "white-button" : null}`}>
                {buttonText ? buttonText : "Learn More"}
{font?<span className="button-font-span"> <div className="button-fontawesome">
                    <FontAwesomeIcon className="fontawesome-btn" icon={faChevronRight} color="blue" />
                </div> </span> :null }
               
               
          </button>
        </>
    )
}
export default Button