import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import cls from './Form.module.css'
import {login, register} from "../../../store/reducers/user/userActions";
import {UserCredentials} from "../../../models/User";


interface FormProps {
    type: string
    handleSetType: () => void
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    credentials: UserCredentials
}

const Form: FC<FormProps> = ({type, handleSetType, handleChange, handleSubmit, credentials}) => {
    const {email, username, password} = credentials
    return (
        <form onSubmit={handleSubmit} className={`${cls.form} ${cls[type]}`}>
            <div className={cls.content}>
                {
                    type === 'register'
                        ? <Register
                            handleChange={handleChange}
                            credentials={{email, username, password}}
                            setType={handleSetType}
                        />
                        : <Login
                            handleChange={handleChange}
                            credentials={{email, username, password}}
                            setType={handleSetType}
                        />
                }
            </div>
        </form>
    );
};

interface LoginProps {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    setType: () => void
    credentials: UserCredentials
}

const Login: FC<LoginProps> = ({setType, credentials, handleChange}) => {
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
                    type="email"
                    placeholder='Email'
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
                />
            </div>
            <div className={cls.bottom}>
                <div className={cls.text}>
                    Don't have an account? <span onClick={setType}>Sign Up!</span>
                </div>
                <button type='submit'>Sign In</button>
            </div>
        </>
    )
}

interface RegisterProps extends LoginProps {
}

const Register: FC<RegisterProps> = ({setType, credentials, handleChange}) => {
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
                />
            </div>
            <div className={cls.bottom}>
                <div className={cls.text}>
                    Already have an account? <span onClick={setType}>Sign In!</span>
                </div>
                <button type='submit'>Sign Up</button>
            </div>
        </>
    )
}

export default Form;
