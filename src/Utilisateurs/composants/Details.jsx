import { useParams } from 'react-router-dom';
import './Details.css';
import UseAxios from '../../UseAxios';
import {useState} from 'react'
export default function Details() {
  const { id } = useParams();
  const [users,setAxios] = useState(UseAxios(`https://jsonplaceholder.typicode.com/users/${id}`));

  if (!users || !users.id) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="user-details">
      <h2>{users.name}</h2>
      <p><strong>Username:</strong> {users.username}</p>
      <p><strong>Email:</strong> {users.email}</p>
      <p><strong>Phone:</strong> {users.phone}</p>
      <p><strong>Website:</strong> {users.website}</p>

      <h3>Address</h3>
      <p>{users.address?.suite}, {users.address?.street}</p>
      <p>{users.address?.city}, {users.address?.zipcode}</p>

      <h3>Company</h3>
      <p>{users.company?.name}</p>
      <p>{users.company?.catchPhrase}</p>
    </div>
  );
}