// import React from 'react';
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from 'react-redux';

const BarChart = () => {
    const { component2 } = useSelector((state) => state.storage);

    const data = {
        labels: component2.map(val => val.month),
        datasets: [
            {
                label: "Last year",
                data: component2.map(val => val.last_year),
                backgroundColor: "rgba(125, 249, 255, 0.8)",
                borderRadius: 3,
                barThickness: 'flex',
                barPercentage: 0.8,
                categoryPercentage: 0.4,
            },
            {
                label: "This year",
                data: component2.map(val => val.this_year),
                backgroundColor: "rgba(20, 100, 250, 0.8)",
                borderRadius: 3,
                barThickness: 'flex',
                barPercentage: 0.8,
                categoryPercentage: 0.4,
            },
        ],
    };

    const options = {
        layout: {
            padding: {
                left: 0,
                right: 10,
                top: 20,
                bottom: 0
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    padding: 10,
                    font: {
                        weight: 'bold',
                    },
                },
                border: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: true,
                    lineWidth: 0.7, 
                    tickLength: 0,
                    borderDash: [5, 5],
                },
                ticks: {
                    align: 'start',
                    padding: 25,
                    stepSize: 10000,
                    max: 40000,
                    min: 0,
                    font: {
                        weight: 'bold',
                    },
                    callback: function(value) {
                        if(value == 0) return 0
                        return value / 1000 + 'k';
                    },
                },
                border: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    boxHeight: 12,
                    padding: 20,
                    font: {
                        weight: "bold",
                    },
                    color: "#000000",
                    useBorderRadius: true,
                    borderRadius: 2,
                    generateLabels: (chart) => {
                        const labels = ChartJS.defaults.plugins.legend.labels.generateLabels(chart);
                        const firstLabel = labels[0];
                        labels[0] = labels[1];
                        labels[1] = firstLabel;
                        return labels;
                    },
                },
            },
        },
    };

    return (
        <>
            <Bar data={data} options={options} />
        </>
    );
};

export default BarChart;
