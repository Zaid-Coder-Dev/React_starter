import axios from 'axios';
import {useState,useEffect} from 'react';

const useAxios = (url) => {
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get(url).then((response) => {
            if (response){
                setData(response.data)
            }
        });
    },[url]);
    return [data];
}

export default useAxios;