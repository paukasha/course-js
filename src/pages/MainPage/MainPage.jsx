import React from 'react';
import styles from './mainPage.m.css';

import SwiperCore, {A11y, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import '@import/swiper/swiper-bundle.min.css';
import {useSelector} from 'react-redux';
import {unsplashAuthLink} from '@/redux/actions/auth';
import {Link} from 'react-router-dom';

SwiperCore.use([Pagination, Navigation, A11y]);

function MainPage() {

  const photos = useSelector((state) => state.main.photos),
        isAuth = useSelector((state) => state.user.isAuth);
console.log(photos)
  return (<section>
      <div className={styles.photosContainer}>
        <div className={styles.mainContainer}>
          <Swiper
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 4,
            }}
            spaceBetween={30}
            navigation={true}
            slidesPerView={1}
          >
            {photos.map((el) => {
                return (<SwiperSlide key={el.id}>
                    <img src={el.blobLink}  alt=""/>
                  <span className={styles.mainTitle} >
                    Приложение для&nbsp;просмотра фотографий
                  </span>
                  </SwiperSlide>
                );
            })}
          </Swiper>
        </div>
      </div>

      <div className="container">
        <div className={styles.aboutContainer}>
          <div className={styles.about}>
            <h2 className={styles.aboutTitle}>O нас</h2>
            <span className={styles.aboutTitleText}>
              Это веб-приложение сделано для&nbsp;защиты дипломного проекта курс
              «JavaScript с&nbsp;нуля» профессия «Веб-разработчик»
              от&nbsp;SkillBox.
            </span>
          </div>

          <div className={styles.dosmth}>
            <h3 className={styles.dosmthTitle}>В этом приложении вы можете:</h3>
            <ul className={styles.dosmthList}>
              <li className={styles.dosmthItem}>
                Посмотреть фотографии с сайта{" "}
                <a href="https://unsplash.com/" className={styles.unsplashLink}>
                  unsplash.com
                </a>
                .
              </li>
              <li className={styles.dosmthItem}>
                Посмотреть имя автора и дату публикации.
              </li>
              <li className={styles.dosmthItem}>
                Поставить лайк понравившейся фотографии.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.lookPhoto}>
          <span className={styles.lookPhotoText}>
            Чтобы просмотреть ленту фотографий нажмите «Смотреть ленту»
          </span>
          {isAuth ? (
            <Link to="photos" className={styles.lookPhotoButton}>
              Смотреть ленту
            </Link>
          ) : (
            <a href={unsplashAuthLink} className={styles.lookPhotoButton}>
              Смотреть ленту
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default MainPage;
