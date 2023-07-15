import React from 'react';
import cls from './Modal.module.scss';
import {useAppSelector} from "../../../hooks/redux";
import {useActions} from "../../../hooks/useActions";
import {useTranslation} from "react-i18next";
import {capitalize} from "../../../shared/utils";
import PaypalCheckoutButton from "../../PaypalCheckoutButton/PaypalCheckoutButton";


const Modal = () => {
    const {show, plan, price} = useAppSelector(state => state.modalSlice)
    const {setClose} = useActions()
    const {t} = useTranslation('main')

    if (!plan) return <></>

    return (
        <div className={`${cls.modal} ${show ? cls.show : ''}`}>
            <div className={cls.content}>
                <span
                    onClick={() => setClose()}
                    className={cls.close}
                >
                    &times;
                </span>
                <div className={`${cls.left} ${cls[plan]}`}>
                    <img
                        src={require(`../../../assets/images/svg/plan_${plan}.svg`)}
                        alt={'Plan'}
                    />
                </div>
                <div className={cls.right}>
                    <div className={cls.top}>
                        <h1>{t(`${capitalize(plan)} Plan`)}</h1>
                        <h2>${price}</h2>
                    </div>
                    <div className={cls.bottom}>
                        <PaypalCheckoutButton/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
