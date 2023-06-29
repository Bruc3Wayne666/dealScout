import React, {FC} from 'react';
import cls from './WelcomeSection.module.scss'

interface WelcomeSectionProps {
    // ref: LegacyRef<HTMLDivElement>
    handleScroll: () => void
}

const WelcomeSection: FC<WelcomeSectionProps> = ({handleScroll}) => {
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
                    <button onClick={handleScroll}>
                        <span>Choose Plan</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
