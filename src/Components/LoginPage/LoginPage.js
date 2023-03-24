import React, { useState } from 'react'
import './LoginPage.css'
import './TextBox.css'
import logo from '../../resources/Nuroms_Logo.png'
function LoginPage() {

    const [registerForm, setRegisterForm] = useState(false);
    const [loginForm, showLoginform] =useState(true);



    const toggleForm = ()=>{
        !registerForm ? setRegisterForm(true) : setRegisterForm(false);
    }

    const CredentialSection =()=>{

        if(!registerForm){
            return(
                <LoginCredentials/>)

        }else{
            return(
                <RegisterForm/>
            )
        }

    }


    const LoginCredentials = ()=>{
        return(
            <div className="LoginCrendentialArea">
                <div className="LogoImage LogoAtEnd">
                    <img style={{ width: 160, height:70 }} src={logo} alt="" />
                </div>

                <div className='Login-Form-Container'>
                    <form action=""className='Login-Form'>
                        <div className='col'>
                            <input  className='textbox' placeholder='Username' type="text" /><span className="focus-border"></span>
                        </div>
                        <div className='col'>
                            <input  className='textbox tp-mar-7' placeholder='Password' type="text" /><span className="focus-border"></span>
                        </div>
                        <div className="Login-Buttons">
                        <button className="button-65 tp-mar-20" role="button">Login</button>
                        </div>
                    </form>
                </div>

                <div className="Register-Info">
                    <p className='Register-Text'>Don't have an account yet?  </p>
                    <a className='Register-Link' onClick={toggleForm} >&nbsp;Register Here</a>
                </div>
            </div>
        )
    }


    const RegisterForm = ()=>{
        return(
            <div className="RegisterFormArea">
                <div className="LogoImage LogoAtStart">
                    <img style={{ width: 160, height:70 }} src={logo} alt="" />
                </div>

                <div className='Register-Form-Container'>
                    <form action=""className='Register-Form'>
                        <div className='col'>
                            <input  className='textbox' placeholder='Name' type="text" /><span className="focus-border"></span>
                        </div>

                        <div className='col'>
                            <input  className='textbox tp-mar-7' placeholder='Email' type="text" /><span className="focus-border"></span>
                        </div>

                        <div className='col'>
                            <input  className='textbox tp-mar-7' placeholder='Degree' type="text" /><span className="focus-border"></span>
                        </div>

                        <div className='col'>
                            <input  className='textbox tp-mar-7' placeholder='Phone' type="text" /><span className="focus-border"></span>
                        </div>

                        <div className='col'>
                            <input  className='textbox tp-mar-7' placeholder='Password' type="text" /><span className="focus-border"></span>
                        </div>

                        <div className='col'>
                            <input  className='textbox tp-mar-7' placeholder='Confirm Password' type="text" /><span className="focus-border"></span>
                        </div>

                       
                        <div className="Login-Buttons">
                        <button className="button-65 tp-mar-20" role="button">Register</button>
                        </div>
                    </form>
                </div>
                <div className="Login-Info">
                <p className='Login-Text'>Already have an account? </p>
                <a className='Login-Link' onClick={toggleForm} >&nbsp;Login Here</a>
                </div>

            
            </div>
        )
    }





  return (
    <div className='LoginBackground'>
        <div className="LoginContainer">
            <CredentialSection/>
            <div className="LoginImage"></div>
        </div>
    </div>
  )
}

export default LoginPage
