import React, {useEffect, useState, Suspense} from 'react';
import st from './profileContent.m.css'


import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
// import Photo from '@/components/Photo/Photo';
import {useLocation, useNavigate} from 'react-router-dom';
import {getUserPhoto} from '@/redux/actions/auth';
import {setIsLoading} from '@/redux/authReducer';
import Spinner from '@/components/Loader/Spinner';

const Photo = React.lazy(() => import('@/components/Photo/Photo'));

function ProfileContent() {
  const dispatch = useDispatch(),
        location = useLocation();
  const isLoading = useSelector(state => state.user.isLoading),
    currentPage = useSelector(state => state.user.currentPage),
    photos = useSelector(state => state.user.userPhotos);


  useEffect(() => {
    dispatch(getUserPhoto(currentPage, isLoading))
  }, [isLoading])

  const loadMore = () => {
    dispatch(setIsLoading(true))
  }

  const user = useSelector(state => state.user.currentUser)

  return (<div className="container">
      <div className={st.content}>
        {photos.map(photo =>  <Suspense fallback={<Spinner />} key={photo.id}>
          <Photo photo={photo}  />
        </Suspense>)}
      </div>
      <button className={'btn-reset loadMore'}
              onClick={() => loadMore()}>Загрузить еще
      </button>
    </div>
  );
}

export default ProfileContent;