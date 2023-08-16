import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import cls from './Auth.module.scss'
import {useSearchParams} from "react-router-dom";
import {AuthCredentials} from "../../models/Auth";
import {useActions} from "../../hooks/useActions";
import {useAppSelector} from "../../hooks/redux";
import {AuthType} from "../../store/reducers/auth/authSlice";
import Ad from "../../components/AuthPage/Ad";
import AuthSection from "../../components/AuthPage/AuthSection";


const initialState: AuthCredentials = {
    username: '',
    email: '',
    password: '',
    pin: '',
    referral_code: '',
    remember: false
}

const Auth = () => {
    const {login, register, setAuthType, resetUserPassword, requestResetPasswordPin} = useActions()
    const {authType, isLoading} = useAppSelector(state => state.authSlice)
    const [params] = useSearchParams()
    const [credentials, setCredentials] = useState(initialState)
    const {email, username, password, pin, remember} = credentials

    useEffect(() => {
        if (params.get('ref')) {
            return setCredentials({...credentials, referral_code: params.get('ref') as string})
        }
    }, [])

    const handleSetType = (val: string) => {
        setCredentials(initialState)
        setAuthType(val as AuthType)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (authType === AuthType.REGISTER) {
            return register({...credentials, username: username || '', remember})
        } else if (authType === AuthType.LOGIN) {
            return login({email, password, remember})
        } else if (authType === AuthType.PIN) {
            return resetUserPassword({email, password, pin, remember})
        } else {
            handleSetType(AuthType.PIN) // костыль (((((
            return requestResetPasswordPin({email}) // TODO: WTF стейт меняется на pin, но реакт не видит
            // requestResetPasswordPin({email})
            // return setAuthType(AuthType.PIN)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'remember') return setCredentials({
            ...credentials,
            remember: e.currentTarget.checked
        })
        setCredentials({
            ...credentials,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    return (
        <div className={cls.page}>

            <Ad/>

            <AuthSection
                authType={authType}
                isLoading={isLoading}
                handleSetType={handleSetType}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                credentials={credentials}
            />

        </div>
    );
};

export default Auth;
