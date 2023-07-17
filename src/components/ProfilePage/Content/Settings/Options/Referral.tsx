import React, {FC} from 'react';
import cls from "./Option.module.scss";

interface ReferalProps {
    theme: string
    code: string
}

const Referral: FC<ReferalProps> = ({theme, code}) => {
    return (
        <div
            onClick={() => navigator.clipboard.writeText(`https://dealscout.site/auth?ref=${code}`)}
            className={`${cls.option} ${cls[theme]} ${cls.support}`}>
            <button className={cls.copy}>Copy</button>
        </div>
    );
};

export default Referral;
