import React, {FC} from "react";
import cls from "./Form.module.scss";
import {LoginProps} from "./Login";
import {useTranslation} from "react-i18next";

interface RegisterProps extends LoginProps {}

const Register: FC<RegisterProps> = ({isLoading, setType, credentials, handleChange}) => {
    const {email, username, password} = credentials
    const {t} = useTranslation("register")
    return (
        <>
            <div className={cls.input}>
                <img
                    src={require('../../../assets/images/svg/user.svg').default}
                    alt="at"
                />
                <input
                    onChange={handleChange}
                    value={username}
                    name='username'
                    type="text"
                    placeholder={t('usernamePlaceholder')}
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
                    value={email}
                    name='email'
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    disabled={isLoading}
                />
            </div>
            <div className={cls.input}>
                <img
                    src={require('../../../assets/images/svg/lock.svg').default}
                    alt="at"
                />
                <input
                    onChange={handleChange}
                    value={password}
                    name='password'
                    type="password"
                    placeholder={t('passwordPlaceholder')}
                    disabled={isLoading}
                />
            </div>
            <div className={cls.bottom}>
                <div className={cls.text}>
                    {t('AlreadyHaveAcc')}? <span onClick={() => setType('login')}>{t('Sign In')}!</span>
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
                            : t('Sign Up')
                    }
                </button>
            </div>
        </>
    )
}

export default Register
