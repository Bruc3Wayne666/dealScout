import React from 'react';
import cls from './SideBarProfile.module.scss'
import {useAppSelector} from "../../../../hooks/redux";

const SideBarProfile = ({theme}: {theme: string}) => {
    const { login, photo } = useAppSelector(state => state.userSlice)
    return (
        <div className={`${cls.profile} ${cls[theme]}`}>
            <img
                src={`data:image/png;base64,${photo}` || require(`../../../../assets/images/svg/${theme}/profile.svg`)}
                alt="Profile"
            />
            <h5>{login}</h5>
        </div>
    );
};

export default SideBarProfile;
