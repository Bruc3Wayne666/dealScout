import React from 'react';
import cls from './Content.module.scss'
import {useAppSelector} from "../../../hooks/redux";
import Deals from "./Deals/Deals";
import {SideBarOptions} from "../SideBarMenu/SideBarMenu";

const Content = ({theme}: { theme: string }) => {
    const {currentOption} = useAppSelector(state => state.sidebarSlice)

    // const product = {
    //     description: 'Some product',
    //     price: 1
    // }

    return (
        <div className={`${cls.content} ${cls[theme]}`}>
            {
                currentOption === SideBarOptions.MY_DEALS
                    ? <Deals/>
                    : <h2>Nothing yet... {currentOption}</h2>
            }

            {/*<div className="paypal-button-container">*/}
            {/*    <PaypalCheckoutButton product={product}/>*/}
            {/*</div>*/}

        </div>
    );
};

export default Content;
