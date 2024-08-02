// import React from 'react';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useSelector } from 'react-redux';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const LineChart = () => {
    const { component4_aws } = useSelector((state) => state.awsApi);

    const data = {
        labels: component4_aws.map(val => val.date2),
        datasets: [
            {
                label: "Web sales",
                data: component4_aws.map(val => val.unique_count),
                backgroundColor: "rgba(125, 249, 255, 0.8)",
                borderColor: "rgba(125, 249, 255, 0.8)",
                borderWidth: 0.5,
                pointRadius: 1
                
            },
            {
                label: "Offline sales",
                data: component4_aws.map(val => val.cumulative_tweets),
                backgroundColor: "rgba(20, 100, 250, 0.8)",
                borderColor: "rgba(20, 100, 250, 0.8)",
                borderWidth: 0.1,
                pointRadius: 1
            },
        ],
    };

    const options = {
        layout: {
            padding: {
                left: 3,
                right: 0,
                top: 10,
                bottom: 0
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false
                },
                border: {
                    display: false,
                },
            },
            y: {
                grid: {
                },
                ticks: {
                    beginAtZero: true,
                    align: 'start',
                    padding: 10,
                    stepSize: 350,
                    max: 700,
                    min: 0,
                },
                border: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                align:'start',
                labels: {
                    boxWidth: 10, 
                    boxHeight: 10,
                    padding: 23,
                    font: {
                        weight: "bold",
                    },
                    color: "gray",
                    useBorderRadius: true,
                    borderRadius: 2,
                },
            },
        },
    };

    return (
        <>
            <Line data={data} options={options} />
        </>
    );
};

export default LineChart;
