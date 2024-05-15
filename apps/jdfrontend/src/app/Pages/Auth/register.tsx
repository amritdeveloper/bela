import React, { FormEvent, useState } from 'react';
import './register.css'; // Import CSS file for styling

function Register(): JSX.Element {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event: FormEvent<HTMLInputElement>): void => {
        const { name, value } = event.target as HTMLInputElement;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // console.log(formData);
        // Reset form fields
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <div className="container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="textbox">
                        <input name="username" onChange={handleChange} placeholder="Username" required type="text" value={formData.username} />
                    </div>
                    <div className="textbox">
                        <input name="email" onChange={handleChange} placeholder="Email" required type="email" value={formData.email} />
                    </div>
                    <div className="textbox">
                        <input name="password" onChange={handleChange} placeholder="Password" required type="password" value={formData.password} />
                    </div>
                    <div className="textbox">
                        <input name="confirmPassword" onChange={handleChange} placeholder="Confirm Password" required type="password" value={formData.confirmPassword} />
                    </div>
                    <input className="btn" type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    );
}

export default Register;
