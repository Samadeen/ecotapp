import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Unconsumed', 'Consumed'],
  datasets: [
    {
      label: '',
      data: [25, 75],
      backgroundColor: ['#D7F4C0', '#6CB16C'],
    },
  ],
};

const DoughnutChart = () => {
  return <Doughnut data={data} />;
};

export default DoughnutChart;
