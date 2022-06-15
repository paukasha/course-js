import React, {useEffect, useRef, useState} from 'react';
import st from './profile.m.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authReducer';
import { useNavigate } from 'react-router-dom';


const Profile = (props) => {

  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isProfileBtnsShow, setProfileBtnsShow] = useState(false);

  const userProfileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userProfileRef.current && !userProfileRef.current.contains(event.target)) {
        setProfileBtnsShow(false)
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ isProfileBtnsShow ]);


  const showExitBtn = () => {
    setProfileBtnsShow(!isProfileBtnsShow)
  }

  const goToProfile = (e) => {
    e.stopPropagation();
    setProfileBtnsShow(false);
    navigate('photos');
  }

  const goOut = () => {
    dispatch(logout())
    navigate('/')
  }

  return (<div className={st.userProfile}  ref={userProfileRef}>
      <div className={st.userBaseInfo}>
        <span>{user.first_name}</span>
        <div className={st.profileImage} >
          <img src={user.profile_image?.small} alt="user photo" onClick={showExitBtn}/>
        </div>
      </div>

      {isProfileBtnsShow && <div className={st.profileBtns}>
        <button type="button"
                className={st.profileBtn + ' ' + 'btn-reset'}
                onClick={goToProfile}>Профиль</button>

        <button type="button"
                className={st.logoutBtn + ' ' + 'btn-reset'}
                onClick={() => goOut()}>Выйти </button>
        </div>}
    </div>
  );
};

export default Profile;