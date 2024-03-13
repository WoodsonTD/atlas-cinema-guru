// src/routes/auth/Authentication.js

import React, { useState } from 'react';
import './auth.css';
import axios from 'axios';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [switchState, setSwitchState] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        setSwitchState(true);
    };

    const handleSignUp = () => {
        setSwitchState(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response;
            if (switchState) {
                response = await axios.post('/api/auth/login', { username, password });
            } else {
                response = await axios.post('/api/auth/register', { username, password });
            }
            const { token } = response.data;
            localStorage.setItem('accessToken', token);
            setUserUsername(username);
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Authentication error:', error);
            // Handle authentication error
        }
    };

    return (
        <div className="authentication">
            <form onSubmit={handleSubmit}>
                <div className="buttons">
                    <button type="button" onClick={handleSignIn}>Sign In</button>
                    <button type="button" onClick={handleSignUp}>Sign Up</button>
                </div>
                {switchState ? (
                    <Login
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />
                ) : (
                    <Register
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />
                )}
            </form>
        </div>
    );
};

export default Authentication;

