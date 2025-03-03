import React, { useEffect } from 'react';
import Header from "../components/Header.jsx";
import Container from '@mui/material/Container';
import "../css/about.css";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

function About() {


    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 160,
            origin: { y: 0.6 }
        });
    }, []);


    return (
        <div className="aboutMainContainer">

            <Particles
                id="tsparticles"
                options={{
                    particles: {
                        number: { value: 80 },
                        size: { value: 3 },
                        move: { speed: 1 },
                        color: { value: "#ff0000" },
                        line_linked: {
                            enable: true,
                            color: "#ff0000",
                            opacity: 0.5
                        }
                    }
                }}
            />

            <div className="header">
                <Header />
            </div>

            <div className='aboutText'>

                <motion.img
                    src="/img/pp.jpg"
                    alt="Profil Resmi"
                    className="profileImage"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                />

                <Container
                    maxWidth="sm"
                    sx={{
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
                    <h1 className="title">Hakkımda</h1>
                    <p className="aboutDescription">
                        Merhaba ben Muhammet Safa Kaya.23 yaşındayım. Bilgisayar Mühendisliği
                        öğrencisiyim. Karabük Üniversitesinde başladığım lisans eğitimime şu anda Yüzüncü Yıl
                        Üniversitesi 3. sınıf öğrencisi olarak devam ediyorum, 3.20 ortalamaya sahibim. İyi
                        seviyede C#, HTML, CSS , JavaScript, Bootstrap ve React bilgisine sahibim bunların
                        yanında orta seviyede MSSQL ve .NET MVC bilgim var ve bu becerilerimde günden güne
                        kendimi geliştiriyorum. Kendimi bir junior full-stack developer olarak tanımlıyorum.
                    </p>
                </Container>
            </div>
        </div>
    );
}

export default About;
