import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const AppLogout = () => {
  const history = useHistory();

  const handleLogout = () => {
    window.localStorage.removeItem('loginToken');
    window.localStorage.removeItem('userId');

    window.location.replace("/login");
  };

  useEffect(() => {
    handleLogout();
  }, []);
};
