import './icon-button.css'
import Icon from "./Icon";
import React from 'react';
const IconButton = ({ path, onClick, className = undefined, title }) =>
    <button
        className={`icon-button ${className}`}
        onClick={onClick}
    >
        <Icon path={path} title={title} />
    </button>
    ;

export default IconButton;