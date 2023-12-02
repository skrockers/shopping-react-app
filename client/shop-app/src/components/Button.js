import Spinner from "./Spinner";

const Button =({buttonName,buttonType,buttonSubmit,buttonForm,buttonClickHandler,buttonSpinner}) =>{
    return(
        <button className={`btn btn-${buttonType}`} type={buttonSubmit ? buttonSubmit: ''} form={buttonForm}
        onClick={(e) => buttonClickHandler ? buttonClickHandler(e):""}
        > {buttonName} 
        
        <span> {buttonSpinner ? <Spinner spinnerType={buttonSpinner}/> :""}</span>
        </button>
    )
}

export default Button;