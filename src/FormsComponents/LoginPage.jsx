import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage({ email, password }) {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate email
        if (values.email.trim() === '') {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: 'Email is required'
            }));
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: 'Invalid email format'
            }));
            return;
        }

        // Validate password
        if (values.password.trim() === '') {
            setErrors(prevErrors => ({
                ...prevErrors,
                password: 'Password is required'
            }));
            return;
        }

        // Check if the entered email and password match the passed props values
        if (values.email !== email) {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: 'Invalid email'
            }));
            return;
        }

        if (values.password !== password) {
            setErrors(prevErrors => ({
                ...prevErrors,
                password: 'Invalid password'
            }));
            return;
        }

        // Reset errors if the form is valid
        setErrors({
            email: '',
            password: ''
        });

        navigate('/');
    };


    return (
        <form className="create-profile-form" onSubmit={handleSubmit}>
            <div className='welcome'>
                <span>Welcome Back</span>
            </div>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <button type="submit" className="create-profile-form-button">
                Log In
            </button>
            <span className='forgot-pass'>Forgot your password?</span>
        </form>
    );
}

export default LoginPage;



