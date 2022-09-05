import "./Button.css"
const Button = ({buttonText}) => {
    return (
        <>
        <button className="button">
            {buttonText? buttonText:"Learn More"}
          </button>
        </>
    )
}
export default Button