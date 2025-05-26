import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currtState, setcurrtState] = useState("Login")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-title">
                    <h2> {currtState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currtState === "Login" ? <></> : <input type='text' placeholder='Your Name ' required />}

                    <input type='email' placeholder='Enter Your Email' required />
                    <input type='password' placeholder='password' required />
                </div>
                <button>{currtState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p> By clicking , I agree to the terms and conditions use & Policy. </p>
                </div>
                {currtState === "Login"
                    ? <p>Create a new account? <span onClick={() => setcurrtState("Sign Up")} >Click here</span></p>
                    : <p>Already have an account <span onClick={() => setcurrtState("Login")}  >Login here</span></p>
                }


            </form>
        </div>
    )
}

export default LoginPopup
