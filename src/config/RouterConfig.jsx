import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from '../pages/About.jsx';
import Projects from '../pages/Projects.jsx';
import Contact from '../pages/Contact.jsx';

function RouterConfig() {
    return (

        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-me' element={<About />} />
                <Route path='/my-projects/:id?' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default RouterConfig