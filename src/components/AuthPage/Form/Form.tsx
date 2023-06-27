import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import cls from './Form.module.css'
import {login, register} from "../../../store/reducers/user/userActions";
import {UserCredentials} from "../../../models/User";
import Register from "./Register";
import Login from "./Login";
import Request from "./Request";
import Restore from "./Restore";


interface FormProps {
    type: string
    isLoading: boolean
    handleSetType: (v: string) => void
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    credentials: UserCredentials
}

const Form: FC<FormProps> = ({
                                 type,
                                 isLoading,
                                 handleSetType,
                                 handleChange,
                                 handleSubmit,
                                 credentials
                             }) => {
    const {email, username, password, pin} = credentials
    return (
        <form onSubmit={handleSubmit} className={`${cls.form} ${cls[type]}`}>
            <div className={cls.content}>
                {
                    type === 'register' &&
                    <Register
                        isLoading={isLoading}
                        handleChange={handleChange}
                        credentials={credentials}
                        setType={handleSetType}
                    />
                }
                {

                    type === 'login' &&
                    <Login
                        isLoading={isLoading}
                        handleChange={handleChange}
                        credentials={credentials}
                        setType={handleSetType}
                    />

                }
                {
                    type === 'restore' &&
                    <Request
                        isLoading={isLoading}
                        email={email}
                        handleChange={handleChange}
                        setType={handleSetType}
                    />
                }
                {
                    type === 'pin' &&
                    <Restore
                        isLoading={isLoading}
                        pin={pin}
                        handleChange={handleChange}
                    />
                }
            </div>
        </form>
    );
};

export default Form;
