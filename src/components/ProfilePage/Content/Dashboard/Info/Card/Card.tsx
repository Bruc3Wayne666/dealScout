import React, {FC, forwardRef} from 'react';
import cls from './Card.module.scss';
import {motion} from "framer-motion";


const Card: FC<any> = forwardRef(({children}, ref: any) => {
    return (
        <div
            ref={ref}
            className={cls.card}
        >
            {children}
        </div>
    );
})

export default motion(Card);
