import React from 'react';
import "./style.css";

function ImageTiles(props) {
    let tileClass = "tile"

    return (
        <div className={tileClass}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default ImageTiles;