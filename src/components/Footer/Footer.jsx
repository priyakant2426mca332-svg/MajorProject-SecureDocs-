import React from "react";
import footer from "./Footer.module.css";
import footerRes from "./FootRes.module.css";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
   
    return (
        <>
            <div className={`${footer.containerFooter} ${footerRes.containerFooter}`}>
                <div className={`${footer.rowFooter}`}>
                    <div className={`${footer.col3} ${footerRes.colM6} ${footerRes.colP12} ${footerRes.colT6} ${footer.footerCol}`}>
                        <p><strong>ABOUT US</strong></p>
                        <div className={`${footer.aboutTxt} ${footerRes.aboutTxt}`}>
                            <p>Securely upload, manage and share your documents.</p>
                        </div>
                    </div>


                    <div className={`${footer.col3} ${footerRes.colM6} ${footerRes.colP12} ${footerRes.colT6} ${footer.footerCol} ${footer.footerIcon}`}>
                        <div className={`${footer.icons}`}>
                            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={24} color="white" />
                            </a>
                            <p>Github</p>
                        </div>
                        <br />
                        <div className={`${footer.icons}`}>
                            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} color="white" />
                            </a>
                            <p>Linkedin</p>
                        </div>
                        <br />

                        <div className={`${footer.icons}`}>
                            <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} color="white" />
                            </a>
                            <p>Facebook</p>
                        </div>
                    </div>

                    <div className={`${footer.col3} ${footerRes.colM6} ${footerRes.colP12} ${footerRes.colT6} ${footer.footerCol}`}>
                        <p>© {new Date().getFullYear()} SecureDocs. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;