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
            <Chart
                options={options}
                series={series}
                labels={labels}
                type={'donut'}
                width={'300'}
            />
        </div>
    )
};

export default ChartContent;
