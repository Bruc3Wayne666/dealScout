import React, {FC, forwardRef} from 'react';
import cls from './SectionLine.module.scss'
import {motion} from "framer-motion";

const SectionLine: FC<any> = forwardRef(({type}: {type: string}, ref: any) => {
    return (
        <div
            ref={ref}
            className={cls.sectionLine}
        >
            <div className={cls.sectionLineHorizont}>
                {
                    type === 'start'
                        ? <div className={cls.sectionLineStart}/>
                        : <div className={cls.sectionLineEnd}/>
                }
            </div>
        </div>
    );
})

export default motion(SectionLine);
