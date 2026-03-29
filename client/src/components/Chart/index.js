import React from 'react';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart ({ chartData }){

  return (
    <div className="chart" style={{width: "80%", margin: "auto", marginTop: "40px"}}>
      <Line
        data={chartData}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}
export default Chart;
