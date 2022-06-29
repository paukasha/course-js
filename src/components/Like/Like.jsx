import React, {useEffect, useState} from 'react';
import './like.m.css';
import like from '@/img/svg/heart.svg';
import {setOrDeleteLikeByUser} from '@/redux/actions/photos';
import {useDispatch} from 'react-redux';

const Like = ({currentPhoto}) => {

  const [likeByUser, setLikeByUser] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    currentPhoto.liked_by_user ? setLikeByUser('likeByUser') : setLikeByUser('')

  },[currentPhoto.liked_by_user])

  function setLike () {
    dispatch(setOrDeleteLikeByUser(currentPhoto))
  }
  return (
    <div className={'photoLike ' + likeByUser} onClick={() => setLike()}>
      <img src={like} alt="like"/>
      <span>{currentPhoto.likes}</span>
    </div>
  );
};

export default Like;
