// import React from 'react';
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from 'react-redux';

const HorizontalBarChart = () => {
  const { component5 } = useSelector((state) => state.awsApi);

  const data = {
    labels: ['feedback'],
    datasets: [
      {
        label: 'Negative',
        data: [
          { x: [0, component5.negative], y: 'feedback' }
        ],
        backgroundColor: 'rgb(248, 131, 121)',
        borderColor: 'rgb(248, 131, 121)',
        borderWidth: 0,
        borderRadius: 5,
        borderSkipped: false,

      },
      {
        label: 'Neutral',
        data: [
          { x: [component5.negative + 1, component5.negative + component5.neutral + 1], y: 'feedback' }
        ],
        backgroundColor: 'rgb(250, 218, 94)',
        borderColor: 'rgb(250, 218, 94)',
        borderWidth: 0,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: 'Positive',
        data: [
          { x: [component5.negative + component5.neutral + 2 , 100], y: 'feedback' }
        ],
        backgroundColor: 'rgb(144, 238, 144)',
        borderColor: 'rgb(144, 238, 144)',
        borderWidth: 0,
        borderRadius: 5,
        borderSkipped: false,
      },
    ]
  };

  const options = {
    indexAxis: 'y',
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
        beginAtZero: true,

      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
        beginAtZero: true,
        stacked: true,
      },

    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  };

  return (
    <>
      { component5.neutral && <Bar data={data} options={options} />}
    </>
  )
};

export default HorizontalBarChart;
