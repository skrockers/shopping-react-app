const Button =({buttonName,buttonType}) =>{
    return(
        <button className={`btn btn-${buttonType}`}> {buttonName}</button>
    )
}

export default Button;