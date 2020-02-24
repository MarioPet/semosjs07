import React from "react";

const ImagePopup = (props) => {
    return (
        <div className="image-popup">
            <button onClick={props.CloseImagePopup} className="close-popup">&times;</button>
            <div className="popup-container">
                <img src={props.url} alt="My Photo" />
            </div>
        </div>
    )
}

export default ImagePopup;