import React, {ChangeEvent, FC} from "react";
import {UserCredentials} from "../../../models/User";
import cls from "./Form.module.scss";

export interface LoginProps {
    isLoading: boolean
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    setType: (v: string) => void
    credentials: UserCredentials
}

const Login: FC<LoginProps> = ({
                                   isLoading,
                                   setType,
                                   credentials,
                                   handleChange,
                               }) => {
    const {email, password} = credentials
    return (
        <>
            <div className={cls.input}>
                <img
                    src={require('../../../assets/images/svg/at.svg').default}
                    alt="lock"
                />
                <input
                    onChange={handleChange}
                    value={email}
                    name='email'
                    type="text"
                    placeholder='Email or Username'
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
                    placeholder='Password'
                    disabled={isLoading}
                />
            </div>
            <div className={cls.bottom}>
                <div className={cls.text}>
                    Don't have an account? <span onClick={() => setType('register')}>Sign Up!</span>
                </div>
                <div className={cls.text}>
                    <p onClick={() => setType('restore')}>Forgot password</p>
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
                            : 'Sign In'
                    }
                </button>
            </div>
        </>
    )
}

export default Login
