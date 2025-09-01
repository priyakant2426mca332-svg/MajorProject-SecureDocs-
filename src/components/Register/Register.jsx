import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });
        alert("Verification email sent. Please verify to continue.");
        navigate("/login");
    };

    return (
        <div className={styles.container}>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
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
                <button type="submit" className={styles.signinBtn}>Sign Up</button>
            </form>
            <div className={styles.signupdiv}>
                <p className={styles.link} >
                    Already have an account?
                </p>
                <p className={styles.signup} onClick={() => navigate('/login')}>
                    Login here
                </p>
            </div>

        </div>
    );
};

export default Register;
