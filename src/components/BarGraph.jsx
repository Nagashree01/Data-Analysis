/* eslint-disable react/prop-types */

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarGraph = ({ formattedData }) => {
  const data = {
    labels: formattedData.types,
    datasets: [
      {
        label: "Time spent",
        data: formattedData.values,
        backgroundColor: "#61DBFB",
      },
    ],
  };

  const options = {
    indexAxis: "y",
  };
  return (
    <div className="w-[500px] sm:w-[600px] md:w-[800px]">
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default BarGraph;
