import React from "react";
import "./styles.css";

const MediaScreen = ({img, content}) => {
    return (
        <div className="mediaScreen" >
            <img src={img} className="mediaImg" alt=""/>
        </div>
    )
}

export default MediaScreen;