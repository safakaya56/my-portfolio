import React from "react";

const ImageModal = ({ src, onClose }) => {
   
    if (!src) return null;

    return (
        <div
            style={{
                position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
                backgroundColor: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 1
            }}
            onClick={onClose}
        >
            <img src={src} alt="Preview" style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "10px" }} />
        </div>
    );
};

export default ImageModal;
