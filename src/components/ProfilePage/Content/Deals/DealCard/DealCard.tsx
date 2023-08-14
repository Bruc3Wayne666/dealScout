import React, {FC} from 'react';
import cls from './DealCard.module.scss'
import {DealShow} from "../../../../../models/Deal";
import {capitalize} from "../../../../../shared/utils";


const PlanTitles = [
    '...',
    'Starter',
    'Advanced',
    'Pro'
]

interface DealCardProps {
    item: DealShow
    theme: string
    handleAdd: (deal_id: number, isFavorite: boolean) => void
    translate: {
        view_graph: string
        store: string
        created_on: string
    }
}

const DealCard: FC<DealCardProps> = ({item, theme, handleAdd, translate}) => {
    const {
        id,
        photo,
        amazon_price,
        amazon_link,
        fba_seller,
        brs_rank,
        shop_price,
        bsr_percent,
        asin,
        shop_name,
        product_name,
        net_profit,
        est_monthly_sale,
        roi,
        fbm_seller,
        upc_ean,
        day_beautiful,
        category,
        restriction_check,
        shop_link,
        plan_id,
        favorite
    } = item

    const {created_on, store, view_graph} = translate

    return (
        <div className={`${cls.card} ${cls[theme]}`}>
            <div className={cls.header}>
                <div className={cls.mainInfo}>
                    <div className={cls.image}>
                        <img
                            src={`${process.env.REACT_APP_BASE_URL}/deal/photos/${photo}`}
                            alt='Deal image'
                        />
                    </div>
                    <div className={cls.info}>
                        <div className={`${cls.item} ${cls.itemName}`}>
                            <p>{product_name}</p>
                        </div>
                        <div className={`${cls.item} ${cls.category}`}>
                            <p>{capitalize(category)}</p>
                        </div>
                        <div className={`${cls.item} ${cls.date}`}>
                            <p>{created_on}: <span>{day_beautiful}</span></p>
                        </div>
                        <div className={`${cls.item} ${cls.status}`}>
                            <span>{PlanTitles[plan_id]}</span>
                        </div>
                    </div>
                </div>
                <div className={cls.actions}>
                    <button
                        onClick={() => handleAdd(id, favorite)}
                    >
                        <img
                            src={require(`../../../../../assets/images/svg/${theme}/star${favorite ? '_filled' : ''}.svg`)}
                            alt="..."/>
                    </button>
                </div>
            </div>
            <div className={cls.info}>
                <div className={cls.main}>
                    <div className={cls.item}>
                        <h5>Store Name</h5>
                        <p>{shop_name}</p>
                    </div>
                    <div className={cls.item}>
                        <h5>Shop Price</h5>
                        <p>{shop_price}</p>
                    </div>
                    <div className={cls.item}>
                        <h5>Amazon Price</h5>
                        <p>{amazon_price}</p>
                    </div>
                    <div className={cls.item}>
                        <h5>ROI</h5>
                        <p>{roi}</p>
                    </div>
                    <div className={cls.item}>
                        <h5>Net Profit</h5>
                        <p>{net_profit}</p>
                    </div>
                    <div className={cls.item}>
                        <h5>BSR %</h5>
                        <p>{bsr_percent}</p>
                    </div>
                    <div className={cls.item}>
                        <h5>FBA Seller</h5>
                        <p>{fba_seller}</p>
                    </div>
                    <div className={cls.item}>
                        <h5>FBM Seller</h5>
                        <p>{fbm_seller}</p>
                    </div>
                    <div className={cls.item}>
                        <h5>EST Monthly Sale</h5>
                        <p>{est_monthly_sale}</p>
                    </div>
                    <div className={cls.item}>
                        <h5>ASIN</h5>
                        <p>{asin}</p>
                    </div>
                    <div className={cls.item}>
                        <h5>BSR Rank</h5>
                        <p>{brs_rank}</p>
                    </div>
                    <div className={cls.item}>
                        <h5>UPC/EAN</h5>
                        <p>{upc_ean}</p>
                    </div>
                </div>
                <div className={cls.restriction}>
                    <img
                        src={'https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg'} alt="Restriction"
                    />
                    <button>Check Restriction</button>
                </div>
                {/*<span>{amazon_price}</span>*/}
                {/*<a href={amazon_link}>{amazon_link}</a>*/}
            </div>

            <div className={cls.bottom}>
                <div className={cls.left}>
                    <button>{view_graph}</button>
                </div>
                <div className={cls.right}>
                    <a target='_blank' href={shop_link}>
                        <button>{store}</button>
                    </a>
                    <a target='_blank' href={amazon_link}>
                        <button>
                            <img
                                src={require('../../../../../assets/images/svg/amazon_logo.svg').default}
                                alt="Amazon"
                            />
                            Amazon
                        </button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default DealCard;
