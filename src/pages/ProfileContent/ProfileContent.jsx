import React, {Suspense, useEffect} from 'react';
import styles from './profileContent.m.css';

import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {getContent} from '@/redux/actions/photos';
import {setIsLoading} from '@/redux/reducers/auth';
import Spinner from '@/components/Loader/Spinner';

const Photo = React.lazy(() => import('@/components/Photo/Photo'));

function ProfileContent() {
  const dispatch = useDispatch(),
    location = useLocation();

  const isLoading = useSelector((state) => state.photos.isLoading),
    currentPage = useSelector((state) => state.photos.currentPage),
    photos = useSelector((state) => state.photos.content);

  useEffect(() => {
      dispatch(getContent(currentPage, isLoading));
  }, [isLoading]);

  const loadMore = () => {
    dispatch(setIsLoading(true));
  };


  return (
    <div className="container">
      <div className={styles.content}>
        {photos.map((photo) => (
          <Suspense fallback={<Spinner/>} key={photo.id}>
            <Photo photo={photo} loading={isLoading}/>
          </Suspense>
        ))}
      </div>
      <button className={'btn-reset loadMore'} onClick={() => loadMore()}>
        Загрузить еще
      </button>
    </div>
  );
}

export default ProfileContent;
