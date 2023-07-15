import React, {FC} from 'react';
import cls from './Button.module.scss';
import {useActions} from "../../../../../../hooks/useActions";

interface CreateBtnProps {
    theme: string
}

const Button: FC<CreateBtnProps> = ({theme}) => {
    const {setShow} = useActions()

    return (
        <button
            // onClick={() => setShow()}
            className={`${cls.btn} ${cls[theme]}`}
        >
            <img
                src={require('../../../../../../assets/images/svg/plus.svg').default}
                alt="add"
            />
            <span className={cls.text}>Add Deal</span>
        </button>
    );
};

export default Button;
