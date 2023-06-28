import React, {FC} from 'react';
import cls from './DealCard.module.scss'
import {IDeal} from "../../../../../models/Deal";

interface DealCardProps {
    item: IDeal
    theme: string
}

const DealCard: FC<DealCardProps> = ({item, theme}) => {
    const {
        photo,
        amazon_price,
        amazon_link
    } = item
    return (
        <div className={`${cls.card} ${cls[theme]}`}>
            <div className={cls.image}>
                <img
                    src={`data:image/png;base64,${photo}`}
                    alt='Deal image'
                />
            </div>
            <div className={cls.info}>
                <span>{amazon_price}</span>
                <a href={amazon_link}>{amazon_link}</a>
            </div>
        </div>
    );
};

export default DealCard;
