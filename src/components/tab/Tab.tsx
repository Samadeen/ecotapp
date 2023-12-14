import styles from './Tab.module.scss';

interface TabProps {
  img: string;
  title: string;
  action: string;
}

const Tab = ({ img, title, action }: TabProps) => {
  return (
    <div className={styles.tab_container}>
      <img src={img} alt='chart' />
      <h3>{title}</h3>
      <small>{action}</small>
    </div>
  );
};

export default Tab;
