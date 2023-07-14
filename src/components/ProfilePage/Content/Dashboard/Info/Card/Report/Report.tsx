import React, {useContext} from 'react';
import cls from './Report.module.scss';
import {ThemeContext, ThemeContextType} from "../../../../../../../providers/ThemeProvider";

const Report = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType

    return (
        <div className={`${cls.report} ${cls[theme]}`}>
            <div className={cls.top}>
                <h3>All Deals</h3>
                {/*<span>/ report</span>*/}
            </div>
            <div className={`${cls.bottom} ${cls[theme]}`}>
                <button>Download</button>
                <div className={`${cls.icon} ${cls[theme]}`}/>
            </div>
        </div>
    );
};

export default Report;
