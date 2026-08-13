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
import { useTheme } from "../../theme/ThemeContext";
import { DARK } from "../../theme/theme";

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

const CHART_COLORS = {
  light: {
    text: "#000000",
    grid: "rgba(0, 0, 0, 0.1)",
  },
  dark: {
    text: "#f5f5f5",
    grid: "rgba(245, 245, 245, 0.15)",
  },
};

function Chart ({ chartData }){
  const { theme } = useTheme();
  const colors = theme === DARK ? CHART_COLORS.dark : CHART_COLORS.light;

  return (
    <div className="chart" style={{width: "80%", margin: "auto", marginTop: "40px"}}>
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: false,
          color: colors.text,
          plugins: {
            legend: {
              labels: {
                color: colors.text,
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: colors.text,
              },
              grid: {
                color: colors.grid,
              },
            },
            y: {
              ticks: {
                color: colors.text,
              },
              grid: {
                color: colors.grid,
              },
            },
          },
        }}
      />
    </div>
  );
}
export default Chart;
