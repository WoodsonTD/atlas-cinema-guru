// Importing required modules and css
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css';

// Functional component named Input
const Input = ({ label, type, className, value, setValue, icon, inputAttributes })

    // Function to handle input change
    const handleInput = (event) => {
        setValue(event.target.value); // Set the value using setValue prop
    };

    // Return JSX representing the input component
    return (
        <div className={`input-wrapper ${className}`}>
            {label && <label className="input-label">{label}</label>}
            <div className="input-container">
                {icon && <span className="input-icon">{icon}</span>}
                <input
                    type={type}
                    className="input-field"
                    value={value}
                    onChange={handleInput}
                    {...inputAttributes}
                />
            </div>
        </div>
    );
    };


// Exporting Input component as default
export default Input;
