import React, {useEffect, useState} from 'react';
import cls from './Content.module.css'
import {useAppSelector} from "../../../hooks/redux";
import PaypalCheckoutButton from "../../PaypalCheckoutButton/PaypalCheckoutButton";

const Content = ({theme}: {theme: string}) => {
    const {currentOption} = useAppSelector(state => state.sidebarSlice)
    const product = {
        description: 'Some product',
        price: 1
    }

    return (
        <div className={`${cls.content} ${cls[theme]}`}>
            {/*{*/}
            {/*    isLoading*/}
            {/*    ? <img src={require('../../../assets/images/svg/loading.svg').default} alt="Loading..."/>*/}
            {/*    : <h1>CONTENT OF <br/> <span>{currentOption}</span></h1>*/}

            {/*}*/}

            <div className="paypal-button-container">
                <PaypalCheckoutButton product={product}/>
            </div>

        </div>
    );
};

export default Content;
