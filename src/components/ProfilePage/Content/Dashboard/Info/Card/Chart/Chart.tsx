import React, {useState} from 'react';
import Chart from 'react-apexcharts';
import cls from './Chart.module.scss';
import {useTranslation} from "react-i18next";


const options = {
    type: 'donut',
    legend: {
        show: false
    },
    stroke: {
        show: false,
    },
    chart: {
        foreColor: '#222',
    },
    labels: ['Home', 'Games', 'Phones', 'TV', 'Photo'],
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
}


const ChartContent = () => {
    const [series, setSeries] = useState([4444, 555, 410, 1437, 105])
    const [labels, setLabels] = useState(['A', 'B', 'C', 'D', 'E'])
    const {t} = useTranslation('profile')

    return (
        <div className={cls.chart}>
            <div className={cls.top}>
                <h3>{t('done_deals')}</h3>
            </div>
            <div className={cls.donut}>
                <Chart
                    options={options}
                    series={series}
                    labels={labels}
                    type={'donut'}
                    width={'100%'}
                />
                <div className={cls.cats}>
                    <div className={cls.list}>
                        <div className={cls.category}>
                            <div className={cls.left}>
                                <span/>
                                <p>Electronics</p>
                            </div>
                            <p>22%</p>
                        </div>
                        <div className={cls.category}>
                            <div className={cls.left}>
                                <span/>
                                <p>Home</p>
                            </div>
                            <p>22%</p>
                        </div>
                        <div className={cls.category}>
                            <div className={cls.left}>
                                <span/>
                                <p>Medicine</p>
                            </div>
                            <p>22%</p>
                        </div>
                        <div className={cls.category}>
                            <div className={cls.left}>
                                <span/>
                                <p>Sport</p>
                            </div>
                            <p>22%</p>
                        </div>
                        <div className={cls.category}>
                            <div className={cls.left}>
                                <span/>
                                <p>Car</p>
                            </div>
                            <p>22%</p>
                        </div>
                    </div>
                    {/*<li>*/}
                    {/*    <ul>*/}
                    {/*        <span>TV</span>*/}
                    {/*        <span>99%</span>*/}
                    {/*    </ul>*/}
                    {/*    <ul>*/}
                    {/*        <span>TV</span>*/}
                    {/*        <span>99%</span>*/}
                    {/*    </ul>*/}
                    {/*    <ul>*/}
                    {/*        <span>TV</span>*/}
                    {/*        <span>99%</span>*/}
                    {/*    </ul>*/}
                    {/*    <ul>*/}
                    {/*        <span>TV</span>*/}
                    {/*        <span>99%</span>*/}
                    {/*    </ul>*/}
                    {/*    <ul>*/}
                    {/*        <span>TV</span>*/}
                    {/*        <span>99%</span>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}

                </div>
            </div>
            {/*<div className={cls.bottom}>*/}
            {/*    ЧТО ЕЩЁ СЮДА ВЫВОДИТЬ?*/}
            {/*</div>*/}
        </div>
    )
};

export default ChartContent;
