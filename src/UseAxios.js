import axios from 'axios';
import { useState, useEffect } from 'react';

export default function UseAxios(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data);
        });
    }, [url]);

    return [data, setData];
}