import React, {FC} from 'react';
import cls from './Card.module.scss';


const Card: FC<any> = ({children}) => {
    return (
        <div
            className={cls.card}
        >
            {children}
        </div>
    );
}

export default Card;
