import React from 'react';
import cls from './WelcomeSection.module.scss'

const WelcomeSection = () => {
    return (
        <section className={cls.section}>
            <div className={cls.sectionContent}>
                <div className={cls.sectionContentText}>
                    <h1>
                        Welcome to DealScout, <br/>
                        your partner in e-commerce success.
                    </h1>
                </div>
                <div className={cls.sectionContentBtn}>
                    <button>
                        <span>Choose Plan</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
