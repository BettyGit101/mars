import React from 'react';
import styels from './Header.module.scss';

const Header = ({text, isPrimaryHeader, isPrimaryColor}) => {

    const headerSize = isPrimaryHeader? 'primarySize' : 'secondarySize';
    const headerColor = isPrimaryColor? 'primaryColor': '';

    return (
        <span className={`${styels[headerSize]} ${styels[headerColor]}`}>{text}&nbsp;</span>
    )
}

export default Header

