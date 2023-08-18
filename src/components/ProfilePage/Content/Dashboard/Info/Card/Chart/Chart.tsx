import React, {useContext, useEffect, useMemo, useState} from 'react';
import Chart from 'react-apexcharts';
import cls from './Chart.module.scss';
import {useTranslation} from "react-i18next";
import {ThemeContext, ThemeContextType} from "../../../../../../../providers/ThemeProvider";
import {useAppSelector} from "../../../../../../../hooks/redux";
import {useActions} from "../../../../../../../hooks/useActions";


// const options = {
//     type: 'donut',
//     legend: {
//         show: false
//     },
//     stroke: {
//         show: false,
//     },
//     chart: {
//         foreColor: '#666',
//     },
//     // labels: ['Home', 'Games', 'Phones', 'TV', 'Photo'],
//     plotOptions: {
//         pie: {
//             // size: '100px',
//             expandOnClick: false,
//             donut: {
//                 size: '88%',
//                 labels: {
//                     show: true,
//                     name: {
//                         show: false,
//                     },
//                     value: {
//                         show: true,
//                         fontSize: '26px',
//                         fontWeight: 600,
//                         formatter: (val: string) => {
//                             if (Number(val) >= 1000) return `${(Number(val) / 1000).toFixed(2)}K`
//                             return val
//                         }
//                     },
//                     total: {
//                         show: true,
//                     }
//                 },
//             }
//         }
//     },
//     dataLabels: {
//         enabled: false,
//     },
// }


const ChartContent = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const {processedGoods, isLoading} = useAppSelector(state => state.dashboardSlice)
    const {getProcessedGoods} = useActions()
    const {t} = useTranslation('profile')

    const options = useMemo(() => ({
        type: 'donut',
        legend: {
            show: false
        },
        stroke: {
            show: false,
        },
        chart: {
            foreColor: '#666',
        },
        labels: Object.keys(processedGoods).map(key => key),
        plotOptions: {
            pie: {
                // size: '100px',
                expandOnClick: false,
                donut: {
                    size: '88%',
                    labels: {
                        show: true,
                        name: {
                            show: false,
                        },
                        value: {
                            show: true,
                            fontSize: '26px',
                            fontWeight: 600,
                            formatter: (val: string) => {
                                if (Number(val) >= 1000) return `${(Number(val) / 1000).toFixed(2)}K`
                                return val
                            }
                        },
                        total: {
                            show: true,
                        }
                    },
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
    }), [processedGoods])

    const sumValues = Object.values(processedGoods).reduce((a, b) => Number(a) + Number(b), 0)

    useEffect(() => {
        getProcessedGoods()
    }, [])

    return (
        <div className={`${cls.chart} ${cls[theme]}`}>
            <div className={cls.top}>
                <h3>{t('goods_processed')}</h3>
            </div>

            {
                isLoading
                    ? 'Loading...'
                    : <div className={cls.donut}>
                        <Chart
                            options={options}
                            series={Object.values(processedGoods).map(val => Number(val))}
                            type={'donut'}
                            width={'130%'}
                        />

                        <div className={cls.cats}>
                            <div className={cls.list}>
                                {
                                    Object.keys(processedGoods)
                                        .map((category, index) => (
                                            <div
                                                key={index}
                                                className={cls.category}
                                            >
                                                <div className={cls.left}>
                                                    <span/>
                                                    <p>{category}</p>
                                                </div>
                                                <p>{(Number(processedGoods[category]) / sumValues * 100).toFixed(2)}%</p>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
};

export default ChartContent;
