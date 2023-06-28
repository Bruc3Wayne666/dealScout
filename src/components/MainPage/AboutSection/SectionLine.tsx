import React, {FC} from 'react';
import cls from './SectionLine.module.css'

const SectionLine: FC<any> = ({type}: {type: string}) => {
    return (
        <div className={cls.sectionLine}>
            <div className={cls.sectionLineHorizont}>
                {
                    type === 'start'
                        ? <div className={cls.sectionLineStart}/>
                        : <div className={cls.sectionLineEnd}/>
                }
            </div>
        </div>
    );
};

export default SectionLine;
