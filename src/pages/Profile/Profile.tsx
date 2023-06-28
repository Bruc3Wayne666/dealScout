import React, {useContext} from 'react';
import cls from './Profile.module.scss'
import Sidebar from "../../components/ProfilePage/Sidebar/Sidebar";
import Content from "../../components/ProfilePage/Content/Content";
import {ThemeContext, ThemeContextType,} from "../../providers/ThemeProvider";


const Profile = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType

    return (
        <div className={`${cls.page} ${cls[theme]}`}>
            <Sidebar theme={theme}/>
            <Content theme={theme}/>
        </div>
    );
};

export default Profile;
