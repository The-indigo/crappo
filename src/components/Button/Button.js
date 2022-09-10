import "./Button.css"
const Button = ({buttonText,white}) => {
    return (
        <>
        <button className={`button ${white ?"white-button":null}`}>
            {buttonText? buttonText:"Learn More"}
          </button>
        </>
    )
}
export default Button