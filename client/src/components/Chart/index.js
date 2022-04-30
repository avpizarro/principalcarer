import React from 'react';
import { Line } from "react-chartjs-2";

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
