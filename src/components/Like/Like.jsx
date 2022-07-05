import React, {useEffect, useState} from 'react';
import './like.m.css';
import like from '@images/svg/heart.svg';
import {useDispatch} from 'react-redux';
import {setOrDeleteLikeByUser} from '@/redux/actions/photos';


const Like = ({currentPhoto}) => {

  const [likeByUser, setLikeByUser] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    currentPhoto.liked_by_user ? setLikeByUser('likeByUser') : setLikeByUser('')

  }, [currentPhoto.liked_by_user])

  const setLike = () => {
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
