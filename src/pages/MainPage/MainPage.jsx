import React, {useEffect, useRef} from 'react';
import styles from "./mainPage.m.css";

import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "@import/swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination, Navigation, A11y]);
import { useSelector } from "react-redux";
import { unsplashAuthLink } from "@/redux/actions/auth";
import { Link } from "react-router-dom";



function MainPage() {

  const photos = useSelector((state) => state.main.photos),
    isAuth = useSelector((state) => state.user.isAuth);

  const preloadImage = async (url) => {

    if (!url) {
      return new Promise((resolve) => {
        resolve("");
      });
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID avGYLy8xj-R8I3tiRSkeVZvRV0R39Ws34mZod3qn3Zo`,
      },
    });

    const blob = await response.blob();
    const reader = new FileReader();

    reader.readAsDataURL(blob);

    const promise =  new Promise((resolve) => {
      reader.onload = () => {
        resolve(reader.result)
        const img = new Image();
        img.src = reader.result
      }
    })


    return promise

  };

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
              preloadImage(el.links.self).then(res => {
                // console.log(res);

                return (<SwiperSlide key={el.id}>
                    <img src={res} />
                  <span className={styles.mainTitle} >
                    Приложение для&nbsp;просмотра фотографий
                  </span>
                  </SwiperSlide>
                );
              })

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
