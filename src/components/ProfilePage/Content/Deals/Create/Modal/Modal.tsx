import React from 'react';
import cls from './Modal.module.scss';
import {useAppSelector} from "../../../../../../hooks/redux";
import {useActions} from "../../../../../../hooks/useActions";


const Modal = () => {
    const {show} = useAppSelector(state => state.modalSlice)
    const {setClose} = useActions()
    return (
        <div className={`${cls.modal} ${show ? cls.show : ''}`}>
            <div className={cls.content}>
                <span
                    onClick={() => setClose()}
                    className={cls.close}
                >
                    &times;
                </span>
                <h1>Не обращать внимания. Просто модалка</h1>
            </div>
        </div>
    );
};

export default Modal;
