import React, {ChangeEvent, FC, useEffect, useRef, useState} from 'react';
import cls from './Profile.module.scss'
import {useTranslation} from "react-i18next";

interface ProfileProps {
    theme: string
}

const Profile: FC<ProfileProps> = ({theme}) => {
    const [login, setLogin] = useState('')
    const [img, setImg] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const file = e.currentTarget.files[0]
        setImg(URL.createObjectURL(file))
    }

    const {t} = useTranslation('profile')
    return (
        <div className={`${cls.profile} ${cls[theme]}`}>
            <div className={cls.change}>
                <div className={cls.image}>
                    {/*<h4>{t('change_image')}</h4>*/}
                    <div className={cls.input}>
                        <img
                            src={img || require(`../../../../../assets/images/svg/${theme}/profile.svg`)}
                            alt="Profile Image"
                        />
                        <input
                            accept='image/*'
                            onChange={handleChange}
                            type="file"
                        />
                    </div>
                </div>

                <div className={cls.login}>
                    <h4>{t('change_login')}</h4>
                    <input
                        className={cls[theme]}
                        placeholder={t('type_login')}
                        type="text"
                        value={login}
                        onChange={e => setLogin(e.currentTarget.value)}
                    />
                    {
                        login &&
                        <button>{t('confirm')}</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;
