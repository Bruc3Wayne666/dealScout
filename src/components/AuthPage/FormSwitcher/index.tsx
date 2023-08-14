import React, {FC, memo} from 'react';
import cls from './FormSwitcher.module.scss'
import Switch from "react-switch";
import {AuthType} from "../../../store/reducers/auth/authSlice";

interface FormSwitcherProps {
    handleSetType: (val: string) => void
    type: string
}

const FormSwitcher: FC<FormSwitcherProps> = ({handleSetType, type}) => {
    return (
        <div className={cls.switcher}>
            <Switch
                onChange={() => handleSetType(type === AuthType.LOGIN ? AuthType.REGISTER : AuthType.LOGIN)}
                checked={type === AuthType.LOGIN}
                offColor={'#c50'}
                onColor={'#36383E'}
                offHandleColor={'#F6F1D5'}
                onHandleColor={'#c50'}
                handleDiameter={30}
                uncheckedIcon={
                    <div className={`${cls.toggle} ${cls.unchecked}`}>
                        {/*<img*/}
                        {/*    src={require('../../../../assets/images/svg/moon.svg').default}*/}
                        {/*    height={22}*/}
                        {/*    alt={'Dark'}*/}
                        {/*/>*/}
                        or&nbsp;Sign&nbsp;In
                    </div>
                }
                checkedIcon={
                    <div className={`${cls.toggle} ${cls.checked}`}>
                        {/*<img*/}
                        {/*    src={require('../../../../assets/images/svg/sun.svg').default}*/}
                        {/*    height={22}*/}
                        {/*    alt={'Light'}*/}
                        {/*/>*/}
                        Sign&nbsp;Up&nbsp;now
                    </div>
                }
                activeBoxShadow={'0 0 2px 3px #c50'}
                width={180}
                height={34}
            />
        </div>
    );
}

export default FormSwitcher;
