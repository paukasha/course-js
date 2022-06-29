import React from 'react';
import {Navigate} from 'react-router-dom'

const PrivateAuth = ({children, isAuth}) => {

  if (!isAuth) {
    return (<Navigate to="/"/>)
  }
  return children
};

export {PrivateAuth};
