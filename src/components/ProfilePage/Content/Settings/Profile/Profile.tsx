import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import cls from './Profile.module.scss'
import {useTranslation} from "react-i18next";
import {useActions} from "../../../../../hooks/useActions";
import {useAppSelector} from "../../../../../hooks/redux";

interface ProfileProps {
    theme: string
}

const Profile: FC<ProfileProps> = ({theme}) => {
    const {changeUserLogin, changeUserPhoto} = useActions()
    const {user_session} = useAppSelector(state => state.authSlice)
    const {photo, login} = useAppSelector(state => state.userSlice)
    const [newLogin, setNewLogin] = useState('')
    // const [img, setImg] = useState(require(`../../../../../assets/images/svg/${theme}/profile.svg`))
    const [img, setImg] = useState('')
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        if (photo) return setImg(`data:image/png;base64,${photo}`)
        setImg(require(`../../../../../assets/images/svg/${theme}/profile.svg`))
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const file = e.currentTarget.files[0]
        // setImg(URL.createObjectURL(file))
        // changeUserPhoto({image: img, session: user_session})
        changeUserPhoto({
            image: file,
            session: user_session
        })
        setImg(URL.createObjectURL(file)) // change later
    }

    const handleSetLogin = () => {
        changeUserLogin({
            user_session,
            new_login: newLogin
        })
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
                    <div
                        onClick={() => setIsEdit(prev => !prev)}
                        className={`${cls.name} ${cls[theme]}`}
                    >
                        <h3>{login}</h3>
                        <img src={require(`../../../../../assets/images/svg/${theme}/edit.svg`)} alt="Edit"/>
                    </div>
                    {
                        isEdit &&
                        <div className={cls.input}>
                            <input
                                className={cls[theme]}
                                placeholder={t('type_login')}
                                type="text"
                                value={newLogin}
                                onChange={e => setNewLogin(e.currentTarget.value)}
                            />
                            <button
                                onClick={handleSetLogin}
                                disabled={login === ''}
                                className={`${login === '' && cls.disabled}`}
                            >
                                {t('confirm')}
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;
