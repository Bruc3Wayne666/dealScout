import React, {ChangeEvent, FC, FormEvent} from 'react';
import cls from './Form.module.scss'
import {AuthCredentials} from "../../../../models/Auth";
import Register from "./Register";
import Login from "./Login";
import Request from "./Request";
import Restore from "./Restore";
import {AuthType} from "../../../../store/reducers/auth/authSlice";


interface FormProps {
    authType: string
    isLoading: boolean
    handleSetType: (v: string) => void
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    credentials: AuthCredentials
}

const Form: FC<FormProps> = ({
                                 authType,
                                 isLoading,
                                 handleSetType,
                                 handleChange,
                                 handleSubmit,
                                 credentials
                             }) => {
    const {email, password, pin} = credentials

    return (
        <form
            onSubmit={handleSubmit}
            className={`${cls.form} ${cls[authType]}`}
        >
            <div className={cls.header}>
                <img
                    src={require('../../../../assets/images/logo/logo_light.png')}
                    alt="DealScout"
                />
            </div>
            <div className={cls.content}>
                {
                    authType ===  AuthType.REGISTER &&
                    <Register
                        isLoading={isLoading}
                        handleChange={handleChange}
                        credentials={credentials}
                        setType={handleSetType}
                    />
                }
                {

                    authType === AuthType.LOGIN &&
                    <Login
                        isLoading={isLoading}
                        handleChange={handleChange}
                        credentials={credentials}
                        setType={handleSetType}
                    />

                }
                {
                    authType === AuthType.RESTORE &&
                    <Request
                        isLoading={isLoading}
                        email={email}
                        handleChange={handleChange}
                        setType={handleSetType}
                    />
                }
                {
                    authType === AuthType.PIN &&
                    <Restore
                        isLoading={isLoading}
                        pin={pin}
                        password={password}
                        handleChange={handleChange}
                    />
                }
            </div>
        </form>
    );
};

export default Form;
