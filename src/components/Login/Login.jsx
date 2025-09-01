import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setMessage(error.message);
        } else {
            setMessage('Login successful!');
            navigate('/'); // ya jo bhi home/dashboard route ho
        }
    };

    return (<div className={styles.container}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit" className={styles.signinBtn}>Sign In</button>
        </form>
        <p className={styles.message}>{message}</p>
        <div className={styles.signupdiv}>
            <p className={styles.link} >
                Don’t have an account?
            </p>
            <p className={styles.signup} onClick={() => navigate('/register')}>
                SignUp here
            </p>
        </div>
    </div>
    );
};

export default Login;
