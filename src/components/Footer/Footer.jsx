import React from 'react';
import styles from './footer.m.css';
import logo from '@images/logo-footer.png';

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.contacts}>
            <span>Контакты</span>
            <ul className={styles.contactsList}>
              <li className={styles.listItemTel}>
                <a href="tel:+79999999999">+7(999)-999-99-99</a>
              </li>
              <li className={styles.listItemMail}>
                <a href="email:test@mail.ru">test@mail.ru</a>
              </li>
            </ul>
          </div>

          <img src={logo} alt={logo}/>

          <div className={styles.social}>
            <span className={styles.inSocialText}>Мы в соцсетях</span>
            <ul className={styles.socialList}>
              <li className={styles.socialLostItem}>
                <a
                  href="https://vk.com/"
                  target="_blank"
                  className={[styles.link, styles.vk].join(' ')}
                />
              </li>
              <li className={styles.socialLostItem}>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  className={[styles.link, styles.google].join(' ')}
                />
              </li>
              <li className={styles.socialLostItem}>
                <a
                  href="https://ok.ru/"
                  target="_blank"
                  className={[styles.link, styles.ok].join(' ')}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <small className={styles.footerCopy}>©{year} Pavlenko Darya</small>
      </div>
    </footer>
  );
};

export default Footer;
