import React, {Suspense, useEffect} from 'react';
import styles from './photoPage.m.css';
import {useNavigate, useParams} from 'react-router-dom';
import Like from '../../components/Like/Like';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentPhoto} from '@/redux/actions/photos';
import Spinner from '../../components/Loader/Spinner';
import {setCurrentPhoto} from '../../redux/reducers/photos';

const PhotoPage = () => {
  let {photoId} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.user.isAuth),
    currentPhoto = useSelector((state) => state.photos.currentPhoto);
  const goBack = () => {
    navigate(-1);
    dispatch(setCurrentPhoto(''))
  };

  let data = currentPhoto?.promoted_at
    ?.split('T')[0]
    .split('-')
    .reverse()
    .join('.');

  useEffect(() => {
    dispatch(getCurrentPhoto(photoId));
  }, []);

  return (
      <div className="container">
        <button onClick={goBack} className={'btn-reset ' + styles.backBtn}>
          Вернуться назад
        </button>
        {currentPhoto  ?  (<div className={styles.fullPhotoWrapper}>
          <img src={currentPhoto.urls.full} alt=""/>
          <div className={styles.fullPhotoInfo}>
            <div className={styles.fullPhotoDescr}>
              <span className={styles.fullPhotoDescr}>Автор</span>
              <br/>
              <a target="_blanks" href={currentPhoto.user?.links.html}>
                {currentPhoto?.user?.name}
              </a>
            </div>
            <div className={styles.fullPhotoDescr}>
              <span>Дата публикации</span>
              <br/>
              <span className={styles.dateOfCreated}>{data}</span>
            </div>
            <div className={`${styles.fullPhotoDescr} ${styles.fullPhotoLikeBlock}`}>
              <Like currentPhoto={currentPhoto}/>
            </div>
          </div>
        </div>
          ): <Spinner />}
      </div>
  );
};

export default PhotoPage;
