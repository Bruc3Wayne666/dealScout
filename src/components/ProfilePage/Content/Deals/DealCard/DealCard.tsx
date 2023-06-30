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
        amazon_link,
        fba_seller,
        brs_rank,
        shop_price,
        bsr_percent,
        asin,
        store_name,
        net_profit,
        est_monthly_sale,
        roi,
        fbm_seller,
        upc_ean,
        restriction_check
    } = item

    return (
        <div className={`${cls.card} ${cls[theme]}`}>

            <div className={cls.header}>
                <div className={cls.mainInfo}>
                    <div className={cls.image}>
                        <img
                            // src={`data:image/png;base64,${photo}`}
                            src={photo}
                            alt='Deal image'
                        />
                    </div>
                    <div className={cls.info}>
                        <div className={`${cls.item} ${cls.itemName}`}>
                            <p>iPhone 13</p>
                        </div>
                        <div className={`${cls.item} ${cls.category}`}>
                            <p>Electronics</p>
                        </div>
                        <div className={`${cls.item} ${cls.date}`}>
                            <p>Created on: <span>22/12/2023</span></p>
                        </div>
                        <div className={`${cls.item} ${cls.status}`}>
                            <span>PRO</span>
                        </div>
                    </div>
                </div>
                <div className={cls.actions}>
                    <button>
                        <img src={require(`../../../../../assets/images/svg/${theme}/cart.svg`)} alt="..."/>
                    </button>
                    <button>
                        <img src={require(`../../../../../assets/images/svg/${theme}/heart.svg`)} alt="..."/>
                    </button>
                    <button>
                        <img src={require(`../../../../../assets/images/svg/${theme}/like.svg`)} alt="..."/>
                    </button>
                    <button>
                        <img src={require(`../../../../../assets/images/svg/${theme}/dislike.svg`)} alt="..."/>
                    </button>
                </div>
            </div>

            <div className={cls.info}>
                <div className={cls.main}>
                    <div className={cls.item}>
                        <h5>Store Name</h5>
                        <p>{store_name}</p>
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
                    <button>View Graph</button>
                </div>
                <div className={cls.right}>
                    <button>Store</button>
                    <button>
                        <img
                            src={require('../../../../../assets/images/svg/amazon_logo.svg').default}
                            alt="Amazon"
                        />
                        Amazon
                    </button>
                </div>
            </div>

        </div>
    );
};

export default DealCard;
