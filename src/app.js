import React, {Suspense, useEffect} from 'react';
import './styles.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {auth} from '@/redux/actions/auth';
import NotFound from '@/pages/NotFound/NotFound';
import MainPage from '@/pages/MainPage/MainPage';
import Layout from '@components/Layout/Layout';
import Spinner from '@components/Spinner/Spinner';
import {PrivateAuth} from './hoc/PrivateAuth';

const ProfileContent = React.lazy(() => import('@/pages/ProfileContent/ProfileContent'));
const PhotoPage = React.lazy(() => import('@/pages/PhotoPage/PhotoPage'));
const App = () => {
  const navigate = useNavigate(),
    dispatch = useDispatch();

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    let urlSearchParams = new URLSearchParams(window.location.search);
    let params = Object.fromEntries(urlSearchParams.entries());

    dispatch(
      auth(params?.code, () => {
        params.toString();
        window.history.pushState({}, document.title, window.location.pathname);
        navigate('photos');
      })
    );
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route
            path="photos"
            element={
              <PrivateAuth isAuth={accessToken}>
                <Suspense fallback={<Spinner/>}>
                  <ProfileContent/>
                </Suspense>
              </PrivateAuth>
            }
          />

          <Route
            path="photos/:photoId"
            element={
              <PrivateAuth isAuth={accessToken}>
                <Suspense fallback={<Spinner/>}>
                  <PhotoPage/>
                </Suspense>
              </PrivateAuth>
            }
          />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
