import React from 'react';
import cls from './Deals.module.scss';
import {useActions} from "../../../../../../../hooks/useActions";

const Deals = () => {
    const {setCurrent} = useActions()

    return (
        <div className={cls.deals}>
            <div className={cls.top}>
                <h3>Today Deals</h3>
            </div>
            <div className={cls.bottom}>
                <button onClick={() => setCurrent('My Deals')}>Watch</button>
            </div>
        </div>
    );
};

export default Deals;
