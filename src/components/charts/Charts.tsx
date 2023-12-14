import styles from './charts.module.scss';
import arrow_up from '../../assets/arrow-up.svg';
import arrow_down from '../../assets/arrow-down.svg';
import calender from '../../assets/calendar.svg';
import cancel from '../../assets/cancel.svg';
import plus from '../../assets/plus.svg';
import options from '../../assets/options.svg';
import LineChart from '../LineChart';
import BarChart from '../BarChart';
import DoughnutChart from '../DoughnutChart';
import AnimatedNumber from '../AnimatedNumber';

const Charts = () => {
  return (
    <section className={styles.charts_container}>
      <div className={styles.chart_top}>
        <h2>Quick Energy Consumption View</h2>
        <button>Save & Exit</button>
      </div>

      <div className={styles.top_chart}>
        <div className={styles.kwh}>
          <img src={cancel} alt='cancel' className={styles.cancel} />
          <div className={styles.green_circle}>
            <div className={styles.patch_one}></div>
            <div className={styles.patch_two}></div>
            <div className={styles.gray_circle}>
              <div className={styles.triangle}></div>
              <div className={styles.triangle_white}></div>

              <h4>
                <AnimatedNumber value={510} />
                <img src={arrow_up} alt='arrow_up' />
              </h4>
              <small>kWh</small>
              <div className={styles.month}>
                <h4>Jan</h4>
                <small>2022</small>
              </div>
            </div>
          </div>
          <div className={styles.reading}>
            <div className={styles.down}>
              <div className={styles.p}>
                <img src={arrow_down} alt='arrow_down' />
                <AnimatedNumber value={470} />
              </div>
              <small>Dec</small>
            </div>
            <div className={styles.up}>
              <div className={styles.p}>
                <AnimatedNumber value={620} />
                <img src={arrow_up} alt='arrow_up' />
              </div>
              <small>Feb</small>
            </div>
          </div>
        </div>
        <div className={styles.history}>
          <img src={cancel} alt='cancel' className={styles.cancel} />

          <h3>
            Your Consumption History <img src={calender} alt='calender' />
          </h3>
          <LineChart />
        </div>
      </div>
      <div className={styles.bottom_chart}>
        <h3>Real-Time Monitoring</h3>
        <div className={styles.under}>
          <div className={styles.barChart}>
            <div className={styles.top}>
              <small>29 January 2022, 08:00 PM</small>
              <img src={cancel} alt='cancel' />
            </div>
            <BarChart />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='639'
              height='130'
              viewBox='0 0 639 130'
              fill='none'
            >
              <path
                d='M1 88.2663C1 88.2663 34.7927 179.533 108.646 88.2663C182.5 -3 189.104 183.766 264.012 88.2663C338.921 -7.23312 369.549 79.2638 413 24.0015C456.451 -31.2607 481.439 129.006 522.5 33.5031C563.561 -62.0001 638 88.2663 638 88.2663'
                stroke='#00543F'
                stroke-width='2.0964'
              />
            </svg>
            <div className={styles.data}>
              <div className={styles.elect}>
                <div className={styles.dark_green} />
                <h4>Electricity Consumption</h4>
              </div>
              <div className={styles.daily}>
                <div className={styles.light_green} />
                <h4>Daily Avg</h4>
              </div>
            </div>
          </div>
          <div className={styles.threshold}>
            <img src={cancel} alt='cancel' className={styles.left} />
            <h3>
              Consumption Threshold{' '}
              <img src={options} alt='options' className={styles.left} />
            </h3>
            <div className={styles.doughnut}>
              <DoughnutChart />
            </div>
            <button>
              <img src={plus} alt='plus' /> Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charts;
