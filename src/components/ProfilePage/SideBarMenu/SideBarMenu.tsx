import React from 'react';
import cls from './SideBarMenu.module.css'
import SideBarMenuOption from "./SideBarMenuOption";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setCurrent} from "../../../store/reducers/sidebar/sidebarSlice";
import {logout} from "../../../store/reducers/user/userSlice";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";

const options = [
    {title: 'Dashboard'},
    {title: 'Activity History'},
    {title: 'Settings'}
]

const SideBarMenu = ({theme}: {theme: string}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {t, i18n} = useTranslation()
    const {currentOption} = useAppSelector(state => state.sidebarSlice)

    const changeLng = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    const handleSetCurrentOption = (val: string) => {
        dispatch(setCurrent(val.toLowerCase()))
    }

    return (
        <div className={`${cls.menu} ${cls[theme]}`}>
            {
                options.map(({title}, index) => (
                    <SideBarMenuOption
                        key={index}
                        title={title}
                        isActive={title.toLowerCase() === currentOption}
                        handlePress={handleSetCurrentOption}
                        theme={theme}
                    />
                ))
            }

            <button onClick={() => {
                localStorage.removeItem('isLogin')
                localStorage.removeItem('user_session')
                dispatch(logout())
                navigate('/auth')
            }}>LOG OUT</button>

            <div><button onClick={changeLng}>{t('Lng')}</button></div>
        </div>
    );
};

export default SideBarMenu;
