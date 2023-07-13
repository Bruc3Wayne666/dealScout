import React, {useState} from 'react';
import {useParams} from "react-router";
import PaypalCheckoutButton from "../../components/PaypalCheckoutButton/PaypalCheckoutButton";
import cls from './Plan.module.scss';
import PlanInfo from "../../components/PlanPage/PlanInfo/PlanInfo";

const Plan = () => {
    const {id} = useParams()

    return (
        <div className={`${cls.page} ${id ? cls[id] : ''}`}>
            <PlanInfo plan={id}/>
            <div className={cls.purchase}>
                <span>Buy Now:</span>
                <PaypalCheckoutButton product={id}/>
            </div>
        </div>
    );
};

export default Plan;
