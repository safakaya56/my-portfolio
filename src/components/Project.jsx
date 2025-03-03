import React from 'react'
import "../css/project.css"
import { useNavigate } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";


function Project({ projects }) {


    const navigate = useNavigate()

    return (

        projects && projects.map((item) => (
            <div className='col-md-4 d-flex justify-content-center'>
                <div className="card custom-card shadow-lg">
                    <img src={item.imageTop} alt="" className="card-img-top" />
                    <div className="card-body" style={{ cursor: "pointer" }}>
                        <h5 className="card-title ms-2"
                            onClick={() => navigate(`/my-projects/${item.id}`)}>{item.name}</h5>
                        <GoArrowUpRight style={{ fontSize: "25px" }} />
                    </div>
                </div>
            </div>
        ))


    )
}

export default Project