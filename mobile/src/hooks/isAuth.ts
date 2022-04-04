import {useEffect, useState} from 'react';
import useRequest from './useRequest';
import {API} from '../utils/constants';

const isAuth = () => {
  const {makeRequest} = useRequest();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    makeRequest(
      {
        url: `${API}/user/me`,
      },
      res => {
        if (res.data.data) {
          setIsLoggedIn(true);
        }
      },
    );
  }, []);

  return {isLoggedIn};
};

export default isAuth;
