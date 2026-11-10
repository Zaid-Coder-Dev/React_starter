import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function UseAxios(url, actionType) {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(url).then((response) => {
      dispatch({ type: actionType, payload: response.data });
    });
  }, [url, actionType, dispatch]);
}
