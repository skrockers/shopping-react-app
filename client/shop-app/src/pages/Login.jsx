import React, { useState } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import LoginBanner from "../components/LoginBanner";

const Login = () => {

  const [loginInput,setLoginInput] = useState({
    email:"",password:""
  })
  const [viewPassword,setViewPassword] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const showPasswordHandler = (e) =>{
    e.preventDefault();
    setViewPassword(!viewPassword)
  }

  const loginSubmitHandler = async(e) =>{
    e.preventDefault();
    setSpinner(true)
    const loginEmail = loginInput && loginInput.email ? loginInput.email : null;
    const loginPassword = loginInput && loginInput.password ?
    loginInput.password : null;

    const serverResponse = await fetch('http://localhost:5000/account/login',{
      method: 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword
      })
    })

    const result = await serverResponse.json();
    if(serverResponse.status === 200 && result.isOk){
      setSpinner(false);
      window.alert(result.message);
      // Redirect to account dashboard
      
    }
    else{
      setSpinner(false);
      window.alert('User not found');
    }

 
  }
  return (
    <>
   
  
    <section className="login-section">
      <div className="login-box">
        <div className="login-heading">Login</div>
        <form className="login-form" id="login-form">
          <div className="login-input ">
            <label htmlFor="email-input"> Email</label>
            <div className="email-input">
            <input type="email" name="email-input" id="email-input" value={loginInput.email}
            onChange={(e)=> setLoginInput({...loginInput,email: e.target.value})}
            />
            </div>
            
          </div>
          <div className="login-input">
            <label htmlFor="password-input"> Password</label>
            <div className="pwd-input">
              <input
                type={viewPassword ? 'text': 'password'}
                name="password-input"
                id="password-input"
                value={loginInput.password}
                onChange={(e)=> setLoginInput({...loginInput,password: e.target.value})}
              />
              <Button buttonName={viewPassword ? 'Hide' : 'Show'} buttonType="show" buttonClickHandler={showPasswordHandler}/>
            </div>
          </div>

          <div className="login-forgot-password">
            <Link className="login-reset-link" to="/resetPassword"><span>Forgot Password ? Click here</span></Link>
          </div>
          <div className="form-submit">
            <Button buttonType='login-form-submit' buttonName="Login" buttonSubmit={'submit'}
            buttonform="login-form" 
            buttonClickHandler={loginSubmitHandler}
            buttonSpinner={spinner ?  "mini": null}
            />
          </div>
        </form>
      </div>

      <div className="site-login-ads-slots">
      <LoginBanner srcUrl={"https://assets.tatacliq.com/medias/sys_master/images/49444379885598.jpg"}/>
      </div>
    </section>
    </>
  );
};

export default Login;
