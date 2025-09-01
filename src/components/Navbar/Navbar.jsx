import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import nav from './Nav.module.css';
import navRes from './NavRes.module.css';
import { FaUser } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';



import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const { session } = useAuth(); 
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <>
            {!session ? (
                <div className={nav['container-first']}>
                    <div className={`${nav['nav-bar']} ${nav.flex} ${nav['space-bet']}`}>
                        <div className={`${nav['col-2']} ${navRes['col-t-5']} ${navRes['col-p-12']} ${navRes['main-heading']}`}>
                            <h1 onClick={() => navigate('/')}>SecureDocs</h1>
                        </div>
                        <div className={`${nav['col-9']} ${navRes['col-t-6']} ${navRes['col-p-12']}`}>
                            <ul className={`${nav.flex} ${nav['nav-ul']} ${nav['justify-cont']}`}>
                                <li
                                    onClick={() => navigate('/login')}
                                    className={`${(location.pathname === '/login'|| location.pathname === '/')  ? nav.active : ''} ${navRes.optionLi}`}
                                >
                                    <FaUser className={`${nav.loginicon}`} style={{ marginRight: "10px", verticalAlign: "middle", color: (location.pathname === '/login'|| location.pathname === '/') ? 'blue' : 'white' }} />
                                    Login
                                </li>

                                <li
                                    onClick={() => navigate('/register')}
                                    className={`${location.pathname === '/register' ? nav.active : ''} ${navRes.optionLi}`}
                                >
                                    <FaUser className={`${nav.loginicon}`} style={{ marginRight: "10px", verticalAlign: "middle", color: location.pathname === '/register' ? 'blue' : 'white' }} />
                                    Register
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={nav['container-first']}>
                    <div className={`${nav['nav-bar']} ${nav.flex} ${nav['space-bet']}`}>
                        <div className={`${nav['col-2']} ${navRes['col-t-12']} ${navRes['col-p-12']} ${navRes['main-heading']}`}>
                            <h1 onClick={() => navigate('/')}>SecureDocs</h1>
                        </div>
                        <div className={`${nav['col-9']} ${navRes['col-t-12']} ${navRes['col-p-12']}`}>
                            <ul className={`${nav.flex} ${navRes['nav-ul2']} ${nav['nav-ul2']}`}>
                                <li
                                    // onClick={() => navigate('/supupload')}
                                    className={`${location.pathname === '/supupload' ? nav.active : ''} ${navRes.optionLi}`}
                                >
                                    Upload
                                </li>
                                <li 
                                    // onClick={() => navigate('/mydocuments')}
                                    className={`${location.pathname === '/mydocuments' ? nav.active : ''} ${navRes.optionLi}`}
                                >
                                    My Documents
                                </li>

                                <li onClick={() => navigate('/profile')}
                                    className={`${location.pathname === '/profile' ? nav.active : ''} ${navRes.optionLi}`}
                                >
                                    Profile
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
        </>
    );
};

export default Navbar;
