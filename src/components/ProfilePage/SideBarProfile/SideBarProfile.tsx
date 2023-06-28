import React from 'react';
import cls from './SideBarProfile.module.css'
import {useAppSelector} from "../../../hooks/redux";

const SideBarProfile = ({theme}: {theme: string}) => {
    const { user_session } = useAppSelector(state => state.userSlice)
    return (
        <div className={`${cls.profile} ${cls[theme]}`}>
            <img
                src={require(`../../../assets/images/svg/${theme}/profile.svg`)}
                alt="Profile"
            />
            <h5>{user_session}</h5>
        </div>
    );
};

export default SideBarProfile;
