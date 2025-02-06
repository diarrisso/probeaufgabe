import classNames from "classnames";

const Button = ({type = "button", title, className = "", onClick, variant}) => {

    const buttonClasses = classNames(
        "btn",
        {
            "btn-primary": variant === "submit",
            "btn-service": variant === "service",
            "btn.secondary": variant === "newsletterButton"
        },

        className
    )

    return (

        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
        >
            {title}

        </button>
    )
}

export default Button;