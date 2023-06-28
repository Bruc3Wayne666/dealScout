import React, {ChangeEvent, FormEvent, useState} from 'react';
import cls from './Auth.module.scss'
import Form from "../../components/AuthPage/Form/Form";
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import {UserCredentials} from "../../models/User";
import {login, register, restorePassword} from "../../store/reducers/user/userActions";
import {useAppDispatch} from "../../hooks/redux";
import {UserAPI} from "../../api/user";


const initialState: UserCredentials = {
    username: '',
    email: '',
    password: '',
    pin: ''
}

const Auth = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [type, setType] = useState('register')
    const [credentials, setCredentials] = useState(initialState)
    const {email, username, password, pin} = credentials
    const [isLoading, setIsLoading] = useState(false)

    const fromPage = location.state?.from?.pathname || '/'

    const handleSetType = (val: string) => {
        setCredentials(initialState)
        setType(val)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        if (type === 'register') {
            return dispatch(register({
                ...credentials,
                username: username || ''
            })).then(() => {
                setIsLoading(false)
                navigate(fromPage)
            })
        } else if (type === 'login') {
            return dispatch(login({
                email,
                password
            })).then(() => {
                setIsLoading(false)
                navigate(fromPage)
            })
        } else if (type === 'pin') {
            return dispatch(restorePassword({email, password, pin})).then(() => {
                setIsLoading(false)
                navigate(fromPage)
            })
        } else {
            handleRequestPin()
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleRequestPin = () => {
        UserAPI.requestPin({email})
            .then(() => {
                setIsLoading(false)
                setType('pin')
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
