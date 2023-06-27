import React, {useEffect, useState} from 'react';
import cls from './Content.module.css'
import {useAppSelector} from "../../../hooks/redux";

const Content = ({theme}: {theme: string}) => {
    const {currentOption} = useAppSelector(state => state.sidebarSlice)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1200)
    }, [])

    return (
        <div className={`${cls.content} ${cls[theme]}`}>
            {
                isLoading
                ? <img src={require('../../../assets/images/svg/loading.svg').default} alt="Loading..."/>
                : <h1>CONTENT OF <br/> <span>{currentOption}</span></h1>

            }
        </div>
    );
};

export default Content;
