import {useEffect, useState} from 'react';
import useRequest from './useRequest';
import {API} from '../utils/constants';

const useIsAuth = () => {
  const {makeRequest} = useRequest();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function Login(loggedIn: boolean) {
    setIsLoggedIn(loggedIn);
  }

  function Logout() {
    makeRequest(
      {
        url: `${API}/user/logout`,
        method: 'POST',
      },
      res => {
        if (res.data.data === 'Logged out!') {
          setIsLoggedIn(false);
        }
      },
    );
  }

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

  return {isLoggedIn, Login, Logout};
};

export default useIsAuth;
