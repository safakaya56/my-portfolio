import React from 'react';
import "../css/projects.css";
import Container from '@mui/material/Container';
import Header from '../components/Header';
import ProjectList from '../components/ProjectList';
import ProjectDetails from '../components/ProjectDetails';
import { useParams } from "react-router-dom";


function Projects() {

    const { id } = useParams();

    return (
        <div className="aboutMainContainer">
            <div className="header">
                <Header />
            </div>

            <div className='aboutProjects'>
                <Container
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        marginTop: "100px",
                        color: "#003366",
                        backgroundColor: "#E6F0FF",
                        borderRadius: "20px",
                        padding: "25px",
                        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
                        transition: "0.3s",
                        "&:hover": {
                            backgroundColor: "#CCE0FF",
                            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)"
                        }
                    }}
                >
                    <div className="projectsContainer pt-5">
                        {id ? <ProjectDetails /> : <ProjectList />}
                    </div>
                </Container>


            </div>
        </div>
    );
}

export default Projects;
