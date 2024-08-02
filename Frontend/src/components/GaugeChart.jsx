// import React from 'react'
import { useSelector } from 'react-redux';
import { Chart as ChartJS, defaults, plugins } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const GaugeChart = () => {
    const { component3 } = useSelector((state) => state.awsApi);
    // console.log("Api call of comp 3", component3)

    const data = {
        labels: ["Score", "Remaining"],
        datasets: [
            {
                label: "Score",
                data: [component3.score, 100 - component3.score],
                backgroundColor: ["rgba(20, 100, 250, 0.8)", "#D3D3D3"],
                borderRadius: 6,
                cutout: "85%",
                circumference: 180,
                rotation: 270
            }
        ]
    };

    const centerTextPlugin = {
        id: 'centerText',
        afterDraw: (chart) => {
            const { width, height, ctx } = chart;
            ctx.restore();
            ctx.font = `bold 40px sans-serif`;
            ctx.textBaseline = 'middle';

            const text1 = component3.score;
            const textX = Math.round((width - ctx.measureText(text1).width) / 2);
            const textY = height - 33;
            ctx.fillStyle = 'black';
            ctx.fillText(text1, textX, textY);

            ctx.font = ` 13px sans-serif`;
            const text2 = 'of 100 points';
            const textX2 = Math.round((width - ctx.measureText(text2).width) / 2);
            const textY2 = height - 7;
            ctx.fillStyle = 'gray';
            ctx.fillText(text2, textX2, textY2);

            // const tickCount = 10; 
            // const tickLength = 4; 
            // const angleStep = Math.PI / tickCount;
            // ctx.strokeStyle = 'gray';
            // ctx.lineWidth = 1.5;

            // for (let i = 0; i <= tickCount; i++) {
            //     const angle = (Math.PI * 3) / 4 + i * angleStep;
            //     const x = width / 2 + (width / 2) * Math.cos(angle);
            //     const y = height / 1.5 + (height / 2) * Math.sin(angle);
            //     const xEnd = x + tickLength * Math.cos(angle);
            //     const yEnd = y + tickLength * Math.sin(angle);
            //     ctx.beginPath();
            //     ctx.moveTo(x, y);
            //     ctx.lineTo(xEnd, yEnd);
            //     ctx.stroke();
            // }

            ctx.save();
        }
    };

    const options = {
        aspectRatio: 1.5,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 20
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false
            }
        },
    }

    return (
        <>
            {component3.score && <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />}
        </>
    )
}

export default GaugeChart
