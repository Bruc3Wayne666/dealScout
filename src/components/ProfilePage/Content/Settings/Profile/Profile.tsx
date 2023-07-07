import React, {FC} from 'react';
import cls from './Profile.module.scss'
import {useTranslation} from "react-i18next";

interface ProfileProps {
    theme: string
}

const Profile: FC<ProfileProps> = ({theme}) => {
    const {t} = useTranslation('profile')
    return (
        <div className={cls.profile}>
            <div className={cls.change}>
                <h4>{t('change_image')}</h4>
                <input type="file"/>

                <h4>{t('change_login')}</h4>
                <input
                    className={cls[theme]}
                    placeholder={t('type_login')}
                    type="text"
                />
            </div>
        </div>
    );
};

export default Profile;
