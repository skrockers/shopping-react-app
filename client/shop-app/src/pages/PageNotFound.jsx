
import { ImSad2 } from "react-icons/im";
const PageNotFound = () =>{
    return(

        <section className=" error error-message page-not-found">
        <p>Oops.. Page not found.</p>
        <p className="error-sad-icon"><ImSad2/></p>
    </section>
    )
   
}

export default PageNotFound;