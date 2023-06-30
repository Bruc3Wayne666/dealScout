import React, {ChangeEvent, FC} from "react";
import cls from "./Form.module.scss";
import {useTranslation} from "react-i18next";

interface RestoreProps {
    isLoading: boolean
    pin: string | number
    password: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Restore: FC<RestoreProps> = ({
                                       isLoading,
                                       pin,
                                       password,
                                       handleChange,
                                   }) => {
    const {t} = useTranslation("restore")
    return (
        <>
            <h3>{t('Enter PIN')}</h3>
            <div className={cls.input}>
                <img
                    src={require('../../../assets/images/svg/at.svg').default}
                    alt="lock"
                />
                <input
                    onChange={handleChange}
                    value={pin}
                    name='pin'
                    type='text'
                    placeholder={t('Enter PIN here')}
                    disabled={isLoading}
                />
            </div>
            <div className={cls.input}>
                <img
                    src={require('../../../assets/images/svg/at.svg').default}
                    alt="lock"
                />
                <input
                    onChange={handleChange}
                    value={password}
                    name='password'
                    type='password'
                    placeholder={t('YourNewPass')}
                    disabled={isLoading}
                />
            </div>
            <div className={cls.bottom}>
                <button type='submit' disabled={isLoading}>
                    {
                        isLoading
                            ? <img
                                src={require('../../../assets/images/svg/spinner.svg').default}
                                alt="Loading..."
                                height={20}
                                width={20}
                            />
                            : t('Continue')
                    }
                </button>
            </div>
        </>
    )
}

export default Restore
