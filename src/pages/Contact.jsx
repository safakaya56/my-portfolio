import React from 'react';
import Container from '@mui/material/Container';
import Header from '../components/Header';
import "../css/contact.css";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
    return (
        <div>
            <div className="contactMainContainer">
                <div className="header">
                    <Header />
                </div>

                <div className='aboutContact'>
                    <Container
                        maxWidth="sm"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            marginTop: "100px",
                            color: "#003366",
                            backgroundColor: "#E6F0FF",
                            borderRadius: "20px",
                            padding: "60px",
                            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
                            transition: "0.3s",
                            "&:hover": {
                                backgroundColor: "#CCE0FF",
                                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)"
                            }
                        }}
                    >
                        <div className="contactContainer">
                            <a href="https://github.com/safakaya56" target="_blank" rel="noopener noreferrer" className="button-link">
                                <button>
                                    <IoLogoGithub className='logo me-2' /> Github
                                </button>
                            </a>
                            <a href="https://www.linkedin.com/in/muhammet-safa-kaya-935422265/?originalSubdomain=tr" target="_blank" rel="noopener noreferrer" className="button-link">
                                <button>
                                    <FaLinkedin className='logo me-2' /> Linkedin
                                </button>
                            </a>
                            <a href="mailto:seffkaya7@gmail.com" className="button-link">
                                <button>
                                    <SiGmail className='logo me-2' /> Email
                                </button>
                            </a>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Contact;
