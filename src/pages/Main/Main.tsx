import React from 'react';
import Header from "../../components/MainPage/Header/Header";
import WelcomeSection from "../../components/MainPage/WelcomeSection/WelcomeSection";
import AboutSection from "../../components/MainPage/AboutSection/AboutSection";
import cls from './Main.module.scss'
import PlansSection from "../../components/MainPage/PlansSection/PlansSection";

const Main = () => {
    return (
        <div className={cls.main}>
            <Header/>
            <WelcomeSection/>
            <AboutSection/>
            <PlansSection/>
        </div>
    );
};

export default Main;
