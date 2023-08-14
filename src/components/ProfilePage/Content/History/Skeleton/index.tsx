import React, {FC} from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import cls from './CardSkeleton.module.scss'

interface CardSkeletonProps {
    theme: string
}

const CardSkeleton: FC<CardSkeletonProps> = ({theme}) => {
    return (
        <div className={`${cls.skeleton} ${cls[theme]}`}>
            <div className={cls.left}>
                <Skeleton width={120}/>
            </div>
            <div className={cls.center}>
                <Skeleton width={160}/>
                <Skeleton width={160}/>
            </div>
            <div className={cls.right}>
                <Skeleton width={120}/>
            </div>
        </div>
    );
};

export default CardSkeleton;
