import React, {ChangeEvent, FC, FormEvent} from 'react';
import cls from './AuthSection.module.scss'
import Form from "./Form/Form";
import {AuthCredentials} from "../../../models/Auth";


interface AuthSectionProps {
    authType: string
    isLoading: boolean
    handleSetType: (v: string) => void
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    credentials: AuthCredentials
}

const AuthSection: FC<AuthSectionProps> = props => {
    return (
        <div className={cls.section}>
            <Form {...props}/>
        </div>
    );
};

export default AuthSection;
