import "./Button.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Button = ({buttonText,white,font,className2}) => {
    return (
        <>
            <button className={`button ${className2} ${white ? "white-button" : null}`}>
                {buttonText ? buttonText : "Learn More"}
{font?<span className="button-font-span"> <div className="button-fontawesome">
                    <FontAwesomeIcon className="fontawesome-btn" icon={faChevronRight} color="blue" />
                </div> </span> :null }
               
               
          </button>
        </>
    )
}
export default Button