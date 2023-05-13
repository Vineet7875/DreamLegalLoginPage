import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateProfileForm.css';

function CreateProfileForm({ email, password, setemail, setpassword }) {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });

        if (name === 'email') {
            setemail(value);
        } else if (name === 'password') {
            setpassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate username
        if (values.username.trim() === '') {
            setErrors(prevErrors => ({
                ...prevErrors,
                username: 'Username is required'
            }));
            return;
        }

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
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password is required',
            }));
            return;
        }

        if (values.password.length < 8 || values.password.length > 15) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password should be 8-15 characters long',
            }));
            return;
        }

        if (!/[A-Z]/.test(values.password)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password should contain at least one uppercase letter',
            }));
            return;
        }

        if (!/[a-z]/.test(values.password)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password should contain at least one lowercase letter',
            }));
            return;
        }

        if (!/\d/.test(values.password)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password should contain at least one digit',
            }));
            return;
        }

        if (!/[@$!%*?&]/.test(values.password)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'Password should contain at least one special symbol',
            }));
            return;
        }

        // Reset errors if the form is valid
        setErrors({
            username: '',
            email: '',
            password: ''
        });

        // navigate('./UserDetailsForm');
        navigate('./UserDetailsForm', { state: { email: values.email, username: values.username } });
    };

    return (
        <form className="create-profile-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}

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
                Create Profile
            </button>
        </form>
    );
}

export default CreateProfileForm;
