import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../css/description.css"

function Description() {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["MERHABA", "BEN MUHAMMET SAFA", "JR FULLSTACK DEVELOPER"],
            typeSpeed: 150,
            backSpeed: 75,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="descriptionMainContainer">
            <span ref={typedRef}></span>
        </div>
    );
}

export default Description;
