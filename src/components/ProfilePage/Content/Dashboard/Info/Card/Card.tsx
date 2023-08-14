import React, {FC} from 'react';
import cls from './Card.module.scss';


const Card: FC<any> = ({children, content}) => {
    return (
        <div
            className={`${cls.card} ${cls[content]}`}
        >
            {children}
        </div>
    );
}

export default Card;
