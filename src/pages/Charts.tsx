import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const values = [
  7000, 19000, 2800, 26500, 9000, 45000, 9000, 20000, 32000, 5000, 30000, 26000,
];

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  labels,
  datasets: [
    {
      label: '',
      //   data: labels.map(() => faker.number.int({ min: 0, max: 50000 })),
      data: values.map((val) => val),
      backgroundColor: '#A7D0A7',
      //   borderWidth: 5, // Set the border width (adjust as needed)
      //   barThickness: 20, // Set the thickness of the bars
      borderRadius: 20,
      barPercentage: 0.6, // Adjust the bar width as a percentage of available space
      //   categoryPercentage: 0.9,
    },
  ],
};

const Charts = () => {
  return (
    <div className='charts'>
      <Bar options={options} data={data} />
      );
    </div>
  );
};

export default Charts;
