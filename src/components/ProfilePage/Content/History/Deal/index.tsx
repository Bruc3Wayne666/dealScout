import React, {FC} from 'react';
import cls from './Deal.module.scss'

interface DealProps {
    theme: string
    deal: {
        plan_id: number,
        buy_time: string,
        end_time: string,
        price: string,
        title: string
    },
    index: number
}



const Deal: FC<DealProps> = ({theme, deal, index}) => {
    return (
        <div className={`${cls.deal} ${cls[theme]}`}>
            <div className={cls.title}>
                <b>{index}.</b>
                <h4 className={cls[deal.title.toLowerCase()]}>{deal.title}</h4>
            </div>
            <div className={cls.dates}>
                <p>Buy time: <span>{deal.buy_time}</span></p>
                <p>End time: <span>{deal.end_time}</span></p>
            </div>
            <div className={cls.price}>
                <span>${deal.price}</span>
            </div>
        </div>
    );
};

export default Deal;