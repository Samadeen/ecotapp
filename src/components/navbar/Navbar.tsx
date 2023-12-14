import styles from './Navbar.module.scss';
import logo from '../../assets/Group 511.svg';
import notification from '../../assets/notification.svg';
import profile from '../../assets/profile.svg';

const Navbar = () => {
  return (
    <header>
      <img src={logo} alt='logo' />
      <div className={styles.profile}>
        <img
          src={notification}
          alt='notification'
          className={styles.notification}
        />
        <img src={profile} alt='profile' />
        <div className={styles.name}>
          <p>David</p>
          <small>CEO</small>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
