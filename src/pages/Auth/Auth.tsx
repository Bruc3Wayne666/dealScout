import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import cls from './Auth.module.css'
import Form from "../../components/AuthPage/Form/Form";
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import {UserCredentials} from "../../models/User";
import {login, register} from "../../store/reducers/user/userActions";
import {useAppDispatch} from "../../hooks/redux";


const initialState: UserCredentials = {
    username: '',
    email: '',
    password: ''
}

const Auth = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [type, setType] = useState('register')
    const [credentials, setCredentials] = useState(initialState)
    const {email, username, password} = credentials

    const fromPage = location.state?.from?.pathname || '/'

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }, [])


    const handleSetType = () => {
        if (type === 'login') {
            setCredentials(initialState)
            return setType('register')
        }
        setCredentials(initialState)
        return setType('login')
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (type === 'register') {
            return dispatch(register({
                email,
                password,
                username: username ? username : ''
            })).then(() => navigate(fromPage))
        }
        return dispatch(login({
            email,
            password
        })).then(() => navigate(fromPage))
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
            <Form
                type={type}
                handleSetType={handleSetType}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                credentials={credentials}
            />
        </div>
    );
};

export default Auth;
