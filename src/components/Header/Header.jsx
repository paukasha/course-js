import React from 'react';
import styles from './header.m.css';
import logo from '@img/logo.png';
import Location from '@/components/Header/Location/Location';
import SignIn from '@/components/Header/Signin/Signin';
import Profile from '@/components/Profile/Profile';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <div className="container">
      <header className={styles.header}>
        <Link to="/">
          <img src={logo} className={styles.logo} alt="logo"/>
        </Link>
        <nav>
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="#">
                О нас
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <Location/>
        {isAuth ? <Profile/> : <SignIn/>}
      </header>
    </div>
  );
};

export default Header;
