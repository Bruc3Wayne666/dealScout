import React from 'react';
import cls from './Empty.module.scss'

const Empty = () => {
    return (
        <div className={cls.empty}>
            <h2>There are no any deals</h2>
        </div>
    );
};

export default Empty;
