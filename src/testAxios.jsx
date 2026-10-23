import {useState} from 'react';
import axios from 'axios';
import UserCard2 from './UserCard2';

export default function Axios(params){

    const[users,setUsers]=useState([]);

    function getusers(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            if (response){
                setUsers(response.data)
            }
        })
    }

    return (
      <div>
          <button onClick={getusers}>GET USERS axios</button>
  
          <div style={{display: 'flex',gap: '20px',flexWrap: 'wrap',justifyContent: 'center',padding: '20px',}}>
              {users.map((user) => (
                  <UserCard2 key={user.id} user={user} />
              ))}
          </div>
      </div>)
}