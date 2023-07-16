import React from 'react';
import cls from './SideBarProfile.module.scss'
import {useAppSelector} from "../../../../hooks/redux";

const SideBarProfile = ({theme}: {theme: string}) => {
    const { isLoading, login, photo } = useAppSelector(state => state.userSlice)
    return (
        <div className={`${cls.profile} ${cls[theme]}`}>
            <img
                src={isLoading
                    ? require('../../../../assets/images/svg/loading.svg').default
                    : `data:image/png;base64,${photo}`
                    || require(`../../../../assets/images/svg/${theme}/profile.svg`)}
                alt="Profile"
            />
            <h5>{ isLoading ? '...' : login}</h5>
        </div>
    );
};

export default SideBarProfile;
