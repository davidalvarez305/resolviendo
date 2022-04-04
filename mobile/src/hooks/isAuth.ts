import {useEffect, useState} from 'react';
import useRequest from './useRequest';
import {API} from '../utils/constants';
import * as SecureStore from "expo-secure-store";

const isAuth = () => {
  const {makeRequest} = useRequest();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    makeRequest(
      {
        url: `${API}/user/me`,
      },
      res => {
        if (res.data.data === 'Not found.') {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      },
    );
  }, []);

  return {isLoggedIn};
};

export default isAuth;
