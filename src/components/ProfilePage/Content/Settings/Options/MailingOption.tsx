import React, {FC, useState} from 'react';
import cls from './Option.module.scss'
import {useTranslation} from "react-i18next";
import Switch from "react-switch";
import {useAppSelector} from "../../../../../hooks/redux";

interface MailingOptionProps {
    theme: string
    cb: ({session}: {session: string}) => void
}

const MailingOption: FC<MailingOptionProps> = ({theme, cb}) => {
    const {t} = useTranslation('profile')
    const { user_session } = useAppSelector(state => state.userSlice)
    const [checked, setChecked] = useState(false)

    return (
        <div className={`${cls.option} ${cls[theme]} `}>
            {t('mailing')}
            <Switch
                onChange={() => {
                    cb({session: user_session})
                    setChecked(prev => !prev)
                }}
                checked={checked}
                offColor={'#242529'}
                onColor={'#242529'}
                offHandleColor={'#F6F1D5'}
                onHandleColor={'#AAFF00'}
                handleDiameter={10}
                uncheckedIcon={<></>}
                checkedIcon={<></>}
                activeBoxShadow={'0 0 0 0 #000'}
                width={30}
                height={14}
            />
        </div>
    );
};

export default MailingOption;
