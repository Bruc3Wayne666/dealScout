import React, {FC, useContext} from 'react';
import cls from './SideBarSwitcher.module.scss'
import Switch from "react-switch";
import {ThemeContext, ThemeContextType} from "../../../providers/ThemeProvider";

const SideBarSwitcher: FC<any> = ({theme}: { theme: string }) => {
    const {handleSetTheme} = useContext(ThemeContext) as ThemeContextType

    return (
        <div className={cls.switcher}>
            <Switch
                onChange={handleSetTheme}
                checked={theme === 'dark'}
                offColor={'#c50'}
                onColor={'#36383E'}
                offHandleColor={'#F6F1D5'}
                onHandleColor={'#c50'}
                handleDiameter={20}
                uncheckedIcon={
                    <div className={`${cls.toggle} ${cls.unchecked}`}>
                        <img
                            src={require('../../../assets/images/svg/moon.svg').default}
                            height={22}
                            alt={'Dark'}
                        />
                    </div>
                }
                checkedIcon={
                    <div className={`${cls.toggle} ${cls.checked}`}>
                        <img
                            src={require('../../../assets/images/svg/sun.svg').default}
                            height={22}
                            alt={'Light'}
                        />
                    </div>
                }
                activeBoxShadow={'0 0 2px 3px #c50'}
                width={72}
                height={28}
            />
        </div>
    );
};

export default SideBarSwitcher;
