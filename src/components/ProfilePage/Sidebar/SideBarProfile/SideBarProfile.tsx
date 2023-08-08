import React, {useEffect, useState} from 'react';
import cls from './SideBarProfile.module.scss'
import {useAppSelector} from "../../../../hooks/redux";

const SideBarProfile = ({theme}: { theme: string }) => {
    const {isLoading, login, photo} = useAppSelector(state => state.userSlice)
    const [img, setImg] = useState('')

    useEffect(() => {
        if (photo !== 'no photo' && !photo.includes('http')) return setImg(`data:image/png;base64,${photo}`)
        else if (photo !== 'no photo') return setImg(photo)
        setImg(require(`../../../../assets/images/svg/${theme}/profile.svg`))
    }, [photo])

    return (
        <div className={`${cls.profile} ${cls[theme]}`}>
            <img
                src={
                    isLoading
                        ? require('../../../../assets/images/svg/loading.svg').default
                        : img
                }
                alt="Profile"
            />
            <h5>{isLoading ? '...' : login}</h5>
        </div>
    );
};

export default SideBarProfile;
