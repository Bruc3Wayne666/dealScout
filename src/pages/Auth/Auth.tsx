import React, {ChangeEvent, FormEvent, useState} from 'react';
import cls from './Auth.module.scss'
import Form from "../../components/AuthPage/Form/Form";
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import {UserCredentials} from "../../models/User";
import {UserAPI} from "../../api/user";
import {useActions} from "../../hooks/useActions";
import {useAppSelector} from "../../hooks/redux";


const initialState: UserCredentials = {
    username: '',
    email: '',
    password: '',
    pin: '',
    referral_link: ''
}

const Auth = () => {
    const {login, register, resetUserPassword, requestResetPasswordPin} = useActions()
    const {isLoading} = useAppSelector(state => state.userSlice)
    const navigate = useNavigate()
    const location = useLocation()
    const [type, setType] = useState('register')
    const [credentials, setCredentials] = useState(initialState)
    const {email, username, password, pin} = credentials
    // const [isLoading, setIsLoading] = useState(false)

    const fromPage = location.state?.from?.pathname || '/'

    const handleSetType = (val: string) => {
        setCredentials(initialState)
        setType(val)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (type === 'register') {
            return register({...credentials, username: username || ''})
        } else if (type === 'login') {
            return login({email, password})
        } else if (type === 'pin') {
            return resetUserPassword({email, password, pin})
        } else {
            requestResetPasswordPin({email})
            return setType('pin')
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    // const handleRequestPin = () => {
    //     UserAPI.requestPin({email})
    //         .then(() => {
    //             setIsLoading(false)
    //             setType('pin')
    //         })
    // }

    return (
        <div className={cls.page}>
            <Link to={'/'}>

                <img
                    src={require('../../assets/images/logo/logo_light.png')}
                    alt="DealScout"
                />
            </Link>
            <Form
                type={type}
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
