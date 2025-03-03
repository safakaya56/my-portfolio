import React from 'react'
import { data } from "../data";
import Project from './Project';

function ProjectList() {
    return (

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {
                <Project projects={data} />
            }
        </div>

    )
}

export default ProjectList