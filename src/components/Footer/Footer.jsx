import React from "react";
import styles from "./footer.m.css";
import logo from "@img/logo-footer.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.contacts}>
            <span>Контакты</span>
            <ul className={styles.contactsList}>
              <li className={styles.listItemTel}>
                <a href="tel:+79144233022">+7(914)-423-30-22</a>
              </li>
              <li className={styles.listItemMail}>
                <a href="email:pd_pavl@mail.ru">pd_pavl@mail.ru</a>
              </li>
            </ul>
          </div>

          <img src={logo} alt={logo} />

          <div className={styles.social}>
            <span className={styles.inSocialText}>Мы в соцсетях</span>
            <ul className={styles.socialList}>
              <li className={styles.socialLostItem}>
                <a
                  href="https://vk.com/id30847399"
                  className={[styles.link, styles.vk].join(" ")}
                />
              </li>
              <li className={styles.socialLostItem}>
                <a
                  href="https://www.google.com/"
                  className={[styles.link, styles.google].join(" ")}
                />
              </li>
              <li className={styles.socialLostItem}>
                <a
                  href="https://ok.ru/"
                  className={[styles.link, styles.ok].join(" ")}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <small className={styles.footerCopy}>©2022 Pavlenko Darya</small>
      </div>
    </footer>
  );
};

export default Footer;
