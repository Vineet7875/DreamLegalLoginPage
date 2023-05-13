import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserDetailsForm.css';

function UserDetailsForm() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("./ConfirmDetails")
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='main-container'>
                <div className='details'>
                    <span>Enter your details</span>
                </div>
                <div className='user-details-form'>
                    <div className="form-section">
                        <label htmlFor="company-name">Company Name</label>
                        <input type="text" id="company-name" name="company-name" placeholder="Enter your company name" required/>

                        <label htmlFor="office-address">Office Address</label>
                        <input type="text" id="office-address" name="office-address" placeholder="Enter your office address" required/>

                        <label htmlFor="firm-contact-no">Contact No (Firm)</label>
                        <input type="tel" id="firm-contact-no" name="firm-contact-no" placeholder="Enter your firm contact no" required/>

                        <label htmlFor="firm-email-id">Email ID (Firm)</label>
                        <input type="email" id="firm-email-id" name="firm-email-id" placeholder="Enter your firm email id" required/>
                    </div>

                    <div className="form-section Team">
                        <label htmlFor="team-size">Team Size</label>
                        <select id="team-size" name="team-size">
                            <option value="">Select team size</option>
                            <option value="1-10">1-10</option>
                            <option value="11-50">11-50</option>
                            <option value="51-100">51-100</option>
                        </select>

                        <label htmlFor="practise-areas">Practise Areas</label>
                        <select id="practise-areas" name="practise-areas" required>
                            <option value="">Select practise areas</option>
                            <option value="Corporate Law">Corporate Law</option>
                            <option value="Intellectual Property">Intellectual Property</option>
                            <option value="Litigation">Litigation</option>
                        </select>

                        <label htmlFor="tech-stack">Tech Stack</label>
                        <select id="tech-stack" name="tech-stack" required>
                            <option value="">Select tech stack</option>
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue.js">Vue.js</option>
                        </select>

                        <label htmlFor="departments">Departments</label>
                        <select id="departments" name="departments" required>
                            <option value="">Select Department</option>
                            <option value=" Law">Law</option>
                            <option value="Finance">Finance</option>
                            <option value="Tech">Tech</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className="confirm-details-button">
                    Confirm Details
                </button>

            </div>
        </form>
    );
}

export default UserDetailsForm;
