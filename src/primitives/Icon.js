import {Icon as MdiIcon} from '@mdi/react'
import './icon.css';

const Icon = ({path, title, className=''}) => {
    const mdiProps = {
        path: path,
        className: `icon ${className}`,
        title: title,
        'aria-hidden': !title
    }
    return <MdiIcon { ...mdiProps } />
};

export default Icon;