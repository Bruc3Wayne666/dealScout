import React from 'react';
import cls from './Loading.module.scss';
import Loader from "../../components/Loading/Loader";

const Loading = () => {
    return (
        <div className={cls.loading}>
            <Loader />
        </div>
    );
};

export default Loading;
