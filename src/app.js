import React, { useEffect, Suspense } from "react";
import { Route, Routes, useNavigate, useSearchParams } from "react-router-dom";
import "./styles.css";
import MainPage from "@/pages/MainPage/MainPage";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "@/redux/actions/auth";
import { getLocation } from "@/redux/actions/main";
import {  getPhotos } from "@/redux/actions/photos";
import NotFound from "@/pages/NotFound/NotFound";

import Layout from "@/components/Layout/Layout";
import Spinner from "@/components/Loader/Spinner";

import { PrivateAuth } from "./hoc/PrivateAuth";
import ProfileContent from "./pages/ProfileContent/ProfileContent";

// const ProfileContent = React.lazy(() => import('@/routes/ProfileContent/ProfileContent'));
const PhotoPage = React.lazy(() => import("@/pages/PhotoPage/PhotoPage"));

const App = () => {
  const navigate = useNavigate(),
    [searchParams, setSearchParams] = useSearchParams(),
    dispatch = useDispatch();

  const codeSearchParam = searchParams.get("code");
  // const photoses = useSelector((state) => state.main.photos);
  useEffect(() => {
    let urlSearchParams = new URLSearchParams(window.location.search);
    let params = Object.fromEntries(urlSearchParams.entries());

    dispatch(
      auth(params?.code, () => {
        params.toString();
        window.history.pushState({}, document.title, window.location.pathname);
        navigate("photos");
      })
    );
    dispatch(getLocation());
    dispatch(getPhotos());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage  />} />
          {/* <Route path="photos" element={*/}

          {/*     <ProfileContent/>}*/}

          {/*/>*/}

          <Route
            path="photos"
            element={
              <PrivateAuth>
                <Suspense fallback={<Spinner />}>
                  <ProfileContent />
                </Suspense>
              </PrivateAuth>
            }
          />

          <Route
            path="photos/:photoId"
            element={
              <PrivateAuth>
                <Suspense fallback={<Spinner />}>
                  <PhotoPage />
                </Suspense>
              </PrivateAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
