import { useState } from "react"
import UserCard from "./UserCard"

export default function Fetch(){
    const [users,setusers]=useState([])
    function getusers(){
        const getdata=async()=>{const reponse=await fetch("https://jsonplaceholder.typicode.com/users")
        const user=await reponse.json()
        return user
        }
    getdata().then((user)=>setusers(user))
    }
    return (
    <div>
        <button onClick={getusers}>GET USERS</button>

        <div style={{display: 'flex',gap: '20px',flexWrap: 'wrap',justifyContent: 'center',padding: '20px',}}>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    </div>
);
}