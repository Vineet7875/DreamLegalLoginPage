import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProfileButton from "./CreateProfileButton";
import CreateProfileForm from "./CreateProfileForm";
import UserDetailsForm from "./UserDetailsForm";
import ConfirmDetailsButton from "./ConfirmDetailsButton";
import LoginPage from "./LoginPage";
import { useState } from "react";
function Form() {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <CreateProfileButton />
                            </>
                        }
                    />
                    <Route path="/CreateProfileForm" element={<CreateProfileForm email={email} setemail={setemail} password={password} setpassword={setpassword}/>} />
                    <Route path="/CreateProfileForm/UserDetailsForm" element={<UserDetailsForm />} />
                    <Route path="/CreateProfileForm/UserDetailsForm/ConfirmDetails" element={<ConfirmDetailsButton />} />
                    <Route path="/CreateProfileForm/UserDetailsForm/ConfirmDetails/LoginPage" element={<LoginPage  email={email} password={password}/>} />
                </Routes>
            </Router>
        </>
    );
}

export default Form;