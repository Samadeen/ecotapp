import Charts from '../components/charts/Charts';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={styles.home_container}>
      <Navbar />
      <section className={styles.flex}>
        <Sidebar />
        <Charts />
      </section>
    </main>
  );
};

export default Home;
