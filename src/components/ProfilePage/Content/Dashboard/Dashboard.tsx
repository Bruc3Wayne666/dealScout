import React from 'react';
import cls from './Dashboard.module.scss';
import Info from "./Info/Info";
import Header from "./Header/Header";


const Dashboard = () => {
    return (
        <div className={cls.dashboard}>
            <Header/>
            <Info/>
        </div>
    );
};

export default Dashboard;
