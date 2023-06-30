import React, {Suspense} from 'react';
import {useTranslation} from "react-i18next";
import cls from './LangSwitcher.module.css'

const LangSwitcher = ({theme}: { theme: string }) => {
    const {t, i18n} = useTranslation('profile')

    // const changeLng = (lng: string) => {
    //     i18n.changeLanguage(lng)
    // }

    return (

        <div>
            <Suspense fallback='loading...'>
                <div
                    className={`${cls.option} ${cls[theme]}`}
                >
                    {theme === 'dark' ?
                        <img
                            src={require('../../../assets/images/svg/dark/lngSwitchWhite.svg').default}
                            height={22}
                            alt={'Dark'}
                        />
                        :
                        <img
                            src={require('../../../assets/images/svg/light/lngSwitchGray.svg').default}
                            height={22}
                            alt={'Dark'}
                        />
                    }

                    <span></span>
                    <div className={cls.dropdown}>
                        <button className={`${cls.dropBtn} ${cls[theme]}`}>{t('Lng')}</button>
                        <div className={`${cls.dropdownContent} ${cls[theme]}`}>
                            <a onClick={() => i18n.changeLanguage("fr")}>Fr</a>
                            <a onClick={() => i18n.changeLanguage("en")}>En</a>
                            <a onClick={() => i18n.changeLanguage("ru")}>Ru</a>
                            <a onClick={() => i18n.changeLanguage("de")}>De</a>
                            <a onClick={() => i18n.changeLanguage("es")}>Es</a>
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default LangSwitcher;
