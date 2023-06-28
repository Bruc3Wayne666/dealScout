import React, {FC} from "react";
import cls from "./Form.module.scss";
import {LoginProps} from "./Login";

interface RegisterProps extends LoginProps {}

const Register: FC<RegisterProps> = ({isLoading, setType, credentials, handleChange}) => {
    const {email, username, password} = credentials
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
                    placeholder='Username (optional)'
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
                    placeholder='Email'
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
                    Already have an account? <span onClick={() => setType('login')}>Sign In!</span>
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
                            : 'Sign Up'
                    }
                </button>
            </div>
        </>
    )
}

export default Register
