import React from "react";
import styles from "./photo.m.css";
import "../Loader/spinner.m.css";
import { Link } from "react-router-dom";
import Like from "../Like/Like";
import Spinner from "../Loader/Spinner";
import { useSelector } from "react-redux";

const Photo = ({ photo, loading }) => {
  return (
    <div className={styles.photoContent}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link to={`/photos/${photo.id}`} className={styles.photoLink} />
          <img className={styles.basePhoto} src={photo.srcBlob} alt="" />
          <Like currentPhoto={photo} />

          <div className={styles.authorLink}>
            <a
              className={styles.authorName}
              target="_blank"
              href={photo.user.links.html}
            >
              <img
                className={styles.authorPhoto}
                src={photo.user.profile_image.medium}
                alt="author photo"
              />
              {photo.user.name}
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Photo;
