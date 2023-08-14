import React, {useContext, useState} from 'react';
import Chart from 'react-apexcharts';
import cls from './Chart.module.scss';
import {useTranslation} from "react-i18next";
import {ThemeContext, ThemeContextType} from "../../../../../../../providers/ThemeProvider";


const options = {
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
    const {theme} = useContext(ThemeContext) as ThemeContextType
    const [series, setSeries] = useState([4444, 555, 410, 1437, 105])
    const [labels, setLabels] = useState(['A', 'B', 'C', 'D', 'E'])
    const {t} = useTranslation('profile')

    return (
        <div className={`${cls.chart} ${cls[theme]}`}>
            <div className={cls.top}>
                <h3>{t('done_deals')}</h3>
            </div>
            <div className={cls.donut}>
                <Chart
                    options={options}
                    series={series}
                    labels={labels}
                    type={'donut'}
                    width={'130%'}
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
                </div>
            </div>
        </div>
    )
};

export default ChartContent;
