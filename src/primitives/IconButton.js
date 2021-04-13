import './icon-button.css'
import Icon from "./Icon";
const IconButton = ({path, onClick, className, title}) =>
    <button
        className={`icon-button ${className}`}
        onClick={onClick}
    >
        <Icon path={path} title={title}/>
    </button>
;

export default IconButton;