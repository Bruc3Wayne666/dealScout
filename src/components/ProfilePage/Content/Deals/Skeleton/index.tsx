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

            <div className={cls.header}>
                <div className={cls.mainInfo}>
                        <Skeleton
                            circle
                            width={50}
                            height={50}
                            style={{marginRight: 20}}
                        />
                        <Skeleton
                            count={4}
                            width={80}
                            height={10}
                        />
                </div>
            </div>
            <div className={cls.info}>
               <Skeleton height={'96%'}/>
            </div>

            <div className={cls.bottom}>
                    <Skeleton
                        width={100}
                        height={20}
                    />
                    <Skeleton
                        width={200}
                        height={20}
                    />
            </div>

        </div>
    );
};

export default CardSkeleton;
