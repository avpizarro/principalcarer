import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {render} from 'react-dom';

// class Chart extends Component {
//   constructor(props) {
    // super(props);

    function Chart (props){
        const labels = ["01/04", "02/04", "05/04", "6/04", "09/05"];
    const data = {
      labels: labels,
      datasets: [{
        label: 'Transactions',
        data: [500, 300, 200, 400, 200],
        fill: false,
        backgroundColor: "rgb(250,67,195)",
        borderColor: "rgb(250,67,195)",
        tension: 0.1
      }]
    };
        const[chartData, setCharData] = useState(data)
    //  {
    //   data: {
    //     labels: ["Dividend", "Medication", "Gift", "Health", "Clothing", "Super"],
    //     datasets: [
    //       {
    //         label: "Transactions",
    //         data: [500, 300, 600, 500, 400, 600],
    //         backgroundColor: [
    //           "rgb(255,123,1)",
    //           "rgb(128,137,188)",
    //           "rgba(255, 206, 86, 0.2)",
    //           "rgba(75, 192, 192, 0.2)",
    //           "rgba(153, 102, 255, 0.2)",
    //           "rgba(255, 159, 64, 0.2)",
    //         ],
    //         borderColor: [
    //           "rgba(255, 99, 132, 1)",
    //           "rgba(54, 162, 235, 1)",
    //           "rgba(255, 206, 86, 1)",
    //           "rgba(75, 192, 192, 1)",
    //           "rgba(153, 102, 255, 1)",
    //           "rgba(255, 159, 64, 1)",
    //         ],
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    // }
    
    
      return (
        <div className="chart" style={{width: "80%", margin: "auto", marginTop: "40px"}}>
          <Line
            data={chartData}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      );
    // }
//   }
}
export default Chart;
