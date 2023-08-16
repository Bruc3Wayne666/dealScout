import React, {useRef} from 'react';
import Header from "../../components/MainPage/Header/Header";
import WelcomeSection from "../../components/MainPage/WelcomeSection/WelcomeSection";
import AboutSection from "../../components/MainPage/AboutSection/AboutSection";
import cls from './Main.module.scss'
import PlansSection from "../../components/MainPage/PlansSection/PlansSection";
import Modal from "../../components/MainPage/Modal/Modal";

const Main = () => {
    const plansRef = useRef<HTMLDivElement>(null)

    // const handleScroll = () => plansRef.current?.scrollIntoView()
    // const handleScroll = () => window.scrollTo(0, 1360)
    const handleScroll = () => {
        plansRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className={cls.main}>
            <Header/>
            <WelcomeSection handleScroll={handleScroll}/>
            <AboutSection/>
            <PlansSection sectionRef={plansRef}/>
        </div>
    );
};

export default Main;
