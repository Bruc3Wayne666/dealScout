import React from 'react';
import cls from './Sidebar.module.scss'
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import SideBarProfile from "../SideBarProfile/SideBarProfile";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import SideBarSwitcher from "../SideBarSwitcher/SideBarSwitcher";

const Sidebar = ({theme}: {theme: string}) => {
    return (
        <div className={`${cls.sidebar} ${cls[theme]}`}>
            <SideBarHeader theme={theme}/>
            <SideBarProfile theme={theme}/>
            <SideBarMenu theme={theme}/>
            <SideBarSwitcher theme={theme}/>
        </div>
    );
};

export default Sidebar;
