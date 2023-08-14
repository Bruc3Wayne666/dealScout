import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import cls from './Auth.module.scss'
import Form from "../../components/AuthPage/Form/Form";
import {Link, useSearchParams} from "react-router-dom";
import {AuthCredentials} from "../../models/Auth";
import {useActions} from "../../hooks/useActions";
import {useAppSelector} from "../../hooks/redux";
import FormSwitcher from "../../components/AuthPage/FormSwitcher";
import {AuthType} from "../../store/reducers/auth/authSlice";


const initialState: AuthCredentials = {
    username: '',
    email: '',
    password: '',
    pin: '',
    referral_code: ''
}

const Auth = () => {
    const {login, register, setAuthType, resetUserPassword, requestResetPasswordPin} = useActions()
    const {authType, isLoading} = useAppSelector(state => state.authSlice)
    const [params] = useSearchParams()
    const [credentials, setCredentials] = useState(initialState)
    const {email, username, password, pin} = credentials

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
            return register({...credentials, username: username || ''})
        } else if (authType === AuthType.LOGIN) {
            return login({email, password})
        } else if (authType === AuthType.PIN) {
            return resetUserPassword({email, password, pin})
        } else {
            requestResetPasswordPin({email})
            return setAuthType(AuthType.PIN)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    return (
        <div className={cls.page}>
            <Link to={'/'}>
                <img
                    src={require('../../assets/images/logo/logo_light.png')}
                    alt="DealScout"
                />
            </Link>

            {/*<button onClick={() => handleSetType(type === 'login' ? 'register' : 'login')}>Change</button>*/}

            {/*<FormSwitcher*/}
            {/*    handleSetType={handleSetType}*/}
            {/*    type={authType}*/}
            {/*/>*/}

            <Form
                type={authType}
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
