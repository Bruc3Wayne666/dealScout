import React from 'react';
import cls from './Income.module.scss';

const Income = () => {
    return (
        <div className={cls.income}>
            <div className={cls.top}>
                <h3>
                    Average Income
                </h3>
                <button/>
            </div>
            <div className={cls.middle}>
                <div className={cls.day}>
                    <p>Thu</p>
                    <span>14</span>
                </div>
                <div className={`${cls.day} ${cls.active}`}>
                    <p>Fri</p>
                    <span>15</span>
                </div>
                <div className={cls.day}>
                    <p>Sat</p>
                    <span>16</span>
                </div>
            </div>
            <div className={cls.bottom}>
                <div className={cls.left}>
                    <span>23%</span>
                </div>
                <div className={cls.right}>
                    <span>-10%</span>
                    <p>Since last day</p>
                </div>
            </div>
        </div>
    );
};

export default Income;
