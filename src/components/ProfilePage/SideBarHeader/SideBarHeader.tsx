import React from 'react';
import cls from './SideBarHeader.module.scss'
import {Link} from "react-router-dom";

const SideBarHeader = ({theme}: {theme: string}) => {
    return (
        <header className={`${cls.header} ${cls[theme]}`}>
            <Link to={'/'}>
                <img
                    src={require('../../../assets/images/logo/logo_light.png')}
                    alt="DealScout"
                />
            </Link>
        </header>
    );
};

export default SideBarHeader;
