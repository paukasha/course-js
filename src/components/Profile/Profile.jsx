import React, {useEffect, useRef, useState} from 'react';
import styles from './profile.m.css';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/reducers/auth';
import {useNavigate} from 'react-router-dom';

const Profile = (props) => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isProfileBtnsShow, setProfileBtnsShow] = useState(false);

  const userProfileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userProfileRef.current &&
        !userProfileRef.current.contains(event.target)
      ) {
        setProfileBtnsShow(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isProfileBtnsShow]);

  const showExitBtn = () => {
    setProfileBtnsShow(!isProfileBtnsShow);
  };

  const goToProfile = (e) => {
    e.stopPropagation();
    setProfileBtnsShow(false);
    navigate('photos');
  };

  const goOut = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className={styles.userProfile} ref={userProfileRef}>
      <div className={styles.userBaseInfo}>
        <span>{user.first_name}</span>
        <div className={styles.profileImage}>
          <img
            src={user.profile_image?.small}
            alt="user photo"
            onClick={showExitBtn}
          />
        </div>
      </div>

      {isProfileBtnsShow && (
        <div className={styles.profileBtns}>
          <button
            type="button"
            className={styles.profileBtn + ' ' + 'btn-reset'}
            onClick={goToProfile}
          >
            Профиль
          </button>

          <button
            type="button"
            className={styles.logoutBtn + ' ' + 'btn-reset'}
            onClick={() => goOut()}
          >
            Выйти{' '}
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
