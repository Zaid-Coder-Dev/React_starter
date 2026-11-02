
import { useState } from 'react';
import UseAxios from '../UseAxios';
import List from './composants/List';

export default function Utilisateurs() {
    const data = UseAxios(
        'https://jsonplaceholder.typicode.com/users'
    );

    const [users,setUsers]=useState(data)

    function supprimer(id) {
        setUsers(users.filter((user) => user.id !== id));
    }

  

    return (
        <div>
            <List
            users={users}
            supprimer={supprimer}
        />
        </div>
    );
}
