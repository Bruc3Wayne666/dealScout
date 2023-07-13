import React, {useContext, useEffect} from 'react';
import cls from './Profile.module.scss'
import Sidebar from "../../components/ProfilePage/Sidebar/Sidebar";
import Content from "../../components/ProfilePage/Content/Content";
import {ThemeContext, ThemeContextType,} from "../../providers/ThemeProvider";
import {useActions} from "../../hooks/useActions";
import Button from "../../components/ProfilePage/Content/Deals/Create/Button/Button";
import Modal from "../../components/ProfilePage/Content/Deals/Create/Modal/Modal";


const Profile = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {getUserInfo} = useActions()

    useEffect(() => {
        getUserInfo({session: localStorage.getItem('user_session') || ''})
    }, [])

    return (
        <div className={`${cls.page} ${cls[theme]}`}>
            <Sidebar theme={theme}/>
            <Content theme={theme}/>
            <Button theme={theme}/>
            <Modal />
        </div>
    );
};

export default Profile;
