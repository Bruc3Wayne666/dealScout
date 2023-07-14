import React, {useState} from 'react';
import Chart from 'react-apexcharts';
import cls from './Chart.module.scss';


const options = {
    type: 'donut',
    legend: {
        show: false
    },
    stroke: {
        show: false,
    },
    chart: {
        foreColor: '#fff',
    },
    labels: ['Home', 'Games', 'Phones', 'TV', 'Photo'],
    plotOptions: {
        pie: {
            // size: '100px',
            expandOnClick: false,
            donut: {
                size: '90%',
                labels: {
                    show: true,
                    total: {
                        show: true,
                        // fontSize: 12,
                        color: '#fff'
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
    const [series, setSeries] = useState([44, 55, 41, 17, 15])
    const [labels, setLabels] = useState(['A', 'B', 'C', 'D', 'E'])

    return (
        <div className={cls.chart}>
            <div className={cls.top}>
                <h3>Done Deals</h3>
            </div>
            <div className={cls.donut}>
                <Chart
                    options={options}
                    series={series}
                    labels={labels}
                    type={'donut'}
                    width={'240'}
                />
                <div className={cls.cats}>
                    ТУТ ДУМАЮ КАК НОРМ СДЕЛАТЬ
                    <li>
                        <ul>TV 99%</ul>
                        <ul>HOME 99%</ul>
                        <ul>GAMES 99%</ul>
                        <ul>PHONES 99%</ul>
                        <ul>PHOTO 99%</ul>
                    </li>
                </div>
            </div>
            <div className={cls.bottom}>
                ЧТО ЕЩЁ СЮДА ВЫВОДИТЬ?
            </div>
        </div>
    )
};

export default ChartContent;
