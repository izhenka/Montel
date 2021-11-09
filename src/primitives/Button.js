import { mdiSync } from '@mdi/js';
import React from 'react';
import './button.css'
import Icon from './Icon';
const Button = ({ children, onClick, primary = false, className = undefined, isLoading = false }) =>
    <button
        className={`button ${primary && 'primary'} ${className}`}
        onClick={onClick}
    >
        <span className="children-and-icon">
            {children}
            {isLoading && <Icon path={mdiSync} title="loading" className="rotate" />}
        </span>
    </button>
    ;

export default Button;