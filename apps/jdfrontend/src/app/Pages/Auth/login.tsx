import type { FormEvent } from 'react';
import React from 'react';
import './login.css'; // Import CSS file for styling

function Login(): JSX.Element {
    return (
        <div className="container">
            <div className="logo">
                <img alt="Logo" src="logo.avif" />
            </div>
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="textbox">
                        <input name="username" placeholder="Username" required type="text" />
                    </div>
                    <div className="textbox">
                        <input name="password" placeholder="Password" required type="password" />
                    </div>
                    <input className="btn" type="submit" value="Sign In" />
                </form>
                <div className="forgot-password">
                    {/* <a href="#">Forgot Password?</a> */}
                </div>
            </div>
            <div className="signup-link">
                {/* <p>Don't have an account? <a href="#">Sign Up</a></p> */}
            </div>
        </div>
    );
}

function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    // Handle form submission here
}

export default Login;
