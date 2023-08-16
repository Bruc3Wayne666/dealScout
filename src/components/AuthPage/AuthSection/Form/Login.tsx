import React, {ChangeEvent, FC} from "react";
import {AuthCredentials} from "../../../../models/Auth";
import cls from "./Form.module.scss";
import {useTranslation} from "react-i18next";

export interface LoginProps {
    isLoading: boolean
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    setType: (v: string) => void
    credentials: AuthCredentials
}

const Login: FC<LoginProps> = ({
                                   isLoading,
                                   setType,
                                   credentials,
                                   handleChange,
                               }) => {
    const {email, password, remember} = credentials
    const {t} = useTranslation('login')
    return (
        <>
            <div className={cls.input}>
                <img
                    src={require('../../../../assets/images/svg/at.svg').default}
                    alt="lock"
                />
                <input
                    onChange={handleChange}
                    value={email}
                    name='email'
                    type="text"
                    placeholder={t('Email or Username')}
                    disabled={isLoading}
                />
            </div>
            <div className={cls.input}>
                <img
                    src={require('../../../../assets/images/svg/lock.svg').default}
                    alt="at"
                />
                <input
                    onChange={handleChange}
                    value={password}
                    name='password'
                    type="password"
                    placeholder={t('Password')}
                    disabled={isLoading}
                />
            </div>
            <div className={cls.bottom}>

                <div className={`${cls.text} ${cls.top}`}>
                    {/*<div className={cls.remember}>*/}
                    {/*    <input*/}
                    {/*        type='checkbox'*/}
                    {/*        onChange={handleChange}*/}
                    {/*        checked={remember}*/}
                    {/*        name='remember'*/}
                    {/*    />*/}
                    {/*    <span>&nbsp;Remember me</span>*/}
                    {/*</div>*/}
                    <p onClick={() => setType('restore')}>{t('ForgotPass')}?</p>
                </div>

                <button type='submit' disabled={isLoading}>
                    {
                        isLoading
                            ? <img
                                src={require('../../../../assets/images/svg/spinner.svg').default}
                                alt="Loading..."
                                height={20}
                                width={20}
                            />
                            : t('Sign In')
                    }
                </button>

                <div className={cls.text}>
                    {t('DontHaveAcc')}?&nbsp;<span onClick={() => setType('register')}>{t('Sign Up')}!</span>
                </div>
            </div>
        </>
    )
}

export default Login
