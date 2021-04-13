import './icon-button.css'
import Icon from "./Icon";
const IconButton = ({path, onClick, className}) =>
    <button
        className={`icon-button ${className}`}
        onClick={onClick}
    >
        <Icon path={path}/>
    </button>
;

export default IconButton;