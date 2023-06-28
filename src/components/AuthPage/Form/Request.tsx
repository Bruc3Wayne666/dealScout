import React, {ChangeEvent, FC} from "react";
import cls from "./Form.module.css";
import {useTranslation} from "react-i18next";

interface RestoreProps {
    isLoading: boolean
    email: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    setType: (v: string) => void
}

const Request: FC<RestoreProps> = ({
                                       isLoading,
                                       email,
                                       handleChange,
                                       setType
                                   }) => {
    const {t} = useTranslation("reset")
    return (
        <>
            <h3>{t("ResetPass")}</h3>
            <div className={cls.input}>
                <img
                    src={require('../../../assets/images/svg/at.svg').default}
                    alt="lock"
                />
                <input
                    onChange={handleChange}
                    value={email}
                    name='email'
                    type="email"
                    placeholder={t('Email')}
                    disabled={isLoading}
                />
            </div>
            <div className={cls.bottom}>
                <div className={cls.text}>
                    <p onClick={() => setType('login')}>{t('ContinueAuth')}</p>
                </div>
                <button type='submit' disabled={isLoading}>
                    {
                        isLoading
                            ? <img
                                src={require('../../../assets/images/svg/spinner.svg').default}
                                alt="Loading..."
                                height={20}
                                width={20}
                            />
                            : t('Get Code')
                    }
                </button>
            </div>
        </>
    )
}

export default Request
