import {useState} from 'react';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({message: ''});

  const makeRequest = async (
    config: AxiosRequestConfig,
    cb: (res: AxiosResponse) => void,
  ) => {
    setIsLoading(true);
    setError({message: ''});

    await axios({
      url: config.url,
      method: config.method ? config.method : undefined,
      headers: config.headers ? config.headers : undefined,
      data: config.data ? config.data : null,
      withCredentials: true,
      validateStatus: function (status) {
        return status < 500;
      },
    })
      .then(response => {
        setIsLoading(false);
        cb(response);
      })
      .catch(error => {
        console.log(error.message);
        setIsLoading(false);
        setError({message: error.message});
      });
  };

  const errorCallback = (msg: string) => {
    setError({message: msg});
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    makeRequest,
    errorCallback,
  };
};

export default useRequest;
