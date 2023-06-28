import React, {useState} from 'react';
import cls from './Plan.module.scss'

export const PlanStart = () => {
    const [isShowInfo, setIsShowInfo] = useState(false)

    return (
        // <div className={cls.card} onMouseEnter={() => setIsShowInfo(true)} onMouseLeave={() => setIsShowInfo(false)}>
        <div className={cls.card}>
            {
                isShowInfo
                    ? <h1>lol</h1>
                    : <>
                        {/*<div className={cls.card}>*/}
                            <div className={cls.start}>
                                <img src={require('../../../assets/images/svg/plan_start.svg').default} alt={'Start'}/>
                            </div>
                            <div className={cls.info}>
                                <div className={cls.infoTop}>
                                    <h3>Starter Plan</h3>
                                    <span>$24.99</span>
                                </div>
                                <div className={cls.infoBottom}>
                                    <button>
                                        Get
                                    </button>
                                </div>
                            </div>
                        {/*</div>*/}
                    </>
            }
        </div>
    );
};


export const PlanAdvanced = () => {
    return (
        <div className={cls.card}>
            <div className={cls.advanced}>
                <img src={require('../../../assets/images/svg/plan_advanced.svg').default} alt={'Advanced'}/>
            </div>
            <div className={cls.info}>
                <div className={cls.infoTop}>
                    <h3>Advanced Plan</h3>
                    <span>$34.99</span>
                </div>
                <div className={cls.infoBottom}>
                    <button>
                        Get
                    </button>
                </div>
            </div>
        </div>
    );
};

export const PlanPRO = () => {
    return (
        <div className={cls.cardPro}>
            <div className={cls.pro}>
                <img src={require('../../../assets/images/svg/plan_pro.svg').default} alt={'PRO'}/>
            </div>
            <div className={cls.info}>
                <div className={cls.infoTop}>
                    <h3>PRO Plan</h3>
                    <span>$49.99</span>
                </div>
                <div className={cls.infoBottom}>
                    <button>
                        Get
                    </button>
                </div>
            </div>
        </div>
    );
};
