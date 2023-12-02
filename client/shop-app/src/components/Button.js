const Button =({buttonName,buttonType,buttonSubmit,buttonForm,buttonClickHandler}) =>{
    return(
        <button className={`btn btn-${buttonType}`} type={buttonSubmit ? buttonSubmit: ''} form={buttonForm}
        onClick={(e) => buttonClickHandler ? buttonClickHandler(e):""}
        > {buttonName}</button>
    )
}

export default Button;