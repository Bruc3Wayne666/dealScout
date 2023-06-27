import React from 'react';
import cls from './AboutSection.module.css'
import SectionLine from "./SectionLine";

const AboutSection = () => {
    return (
        <section className={cls.section}>
            <SectionLine type={'start'}/>
            <div className={cls.sectionContent}>
                <div className={cls.sectionContentTitle}>
                    <h1>About Us</h1>
                </div>
                <div className={cls.sectionContentDesc}>
                    <p>Welcome to DealScout, your partner in e-commerce success. Our team of expert analysts dive deep
                        into extensive product databases from platforms like Amazon, Walmart, and more. Through rigorous
                        analysis and advanced algorithms, we identify and provide you with the most profitable deals
                        daily.
                        <br/>
                        <br/>
                        At DealScout, we're more than a service - we're your strategic ally in maximizing profits and
                        staying ahead of the competition. Trust in our insights to guide you to smarter pricing and
                        better selling. Choose DealScout, where data drives profit.</p>
                </div>
            </div>
            <SectionLine/>
        </section>
    );
};

export default AboutSection;
