import React from 'react';
import styles from './photo.m.css';
import {Link} from 'react-router-dom';
import Like from '@components/Like/Like';
import Spinner from '@components/Spinner/Spinner';

const Photo = ({photo, loading}) => {
  return (
    <div className={styles.photoContent}>
      {loading ? (
        <Spinner/>
      ) : (
        <>
          <Link to={`/photos/${photo.id}`} className={styles.photoLink}/>
          <img className={styles.basePhoto} src={photo.urls.full} alt=""/>
          <Like currentPhoto={photo}/>

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
              <span className={styles.authorName}>{photo.user.name}</span>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Photo;
