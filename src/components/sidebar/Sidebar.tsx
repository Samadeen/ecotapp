import styles from './Sidebar.module.scss';
import chart from '../../assets/chart-line.svg';
import Tab from '../tab/Tab';

const tabProperties = [
  {
    img: chart,
    title: 'Energy Forecast',
    action: 'Add',
  },
  {
    img: chart,
    title: 'Carbon Emission',
    action: 'Add',
  },
  {
    img: chart,
    title: 'Consumption vs Generation ',
    action: 'Add',
  },
];

const Sidebar = () => {
  return (
    <section className={styles.sidebar_container}>
      <div className={styles.side_head}>
        <h1>Widget Library</h1>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='11'
          height='11'
          viewBox='0 0 11 11'
          fill='none'
        >
          <path
            d='M10.676 9.12327C11.1057 9.55293 11.1057 10.249 10.676 10.6786C10.4629 10.8934 10.1811 11 9.89923 11C9.61737 11 9.33621 10.8926 9.12173 10.6778L5.49957 7.05749L1.87776 10.6769C1.66293 10.8934 1.38142 11 1.09991 11C0.818405 11 0.537239 10.8934 0.32224 10.6769C-0.107413 10.2472 -0.107413 9.55121 0.32224 9.12155L3.94508 5.49871L0.32224 1.87759C-0.107413 1.44793 -0.107413 0.751894 0.32224 0.32224C0.751894 -0.107413 1.44793 -0.107413 1.87759 0.32224L5.49957 3.9468L9.12241 0.323959C9.55207 -0.105695 10.2481 -0.105695 10.6778 0.323959C11.1074 0.753613 11.1074 1.44965 10.6778 1.87931L7.05492 5.50215L10.676 9.12327Z'
            fill='#A6A6A6'
          />
        </svg>
      </div>
      <div className={styles.tabs}>
        {tabProperties.map((tab, index) => (
          <Tab
            key={index}
            img={tab.img}
            title={tab.title}
            action={tab.action}
          />
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
