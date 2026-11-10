import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../store/actions';

export default function UserItem({ user }) {
  const dispatch = useDispatch();

  function supprimer() {
    if (!window.confirm('Supprimer cet utilisateur ?')) return;
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .then(() => dispatch(deleteUser(user.id)));
  }

  return (
    <tr>
      <td><span className="id-badge">#{user.id}</span></td>
      <td>
        <div className="cell-main">
          <strong>{user.name}</strong>
          <small>{user.username}</small>
        </div>
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address?.city}</td>
      <td>
        <div className="row-actions">
          <Link to={`/utilisateurs/${user.id}`} title="Voir">↗</Link>
          <Link to={`/utilisateurs/${user.id}/modifier`} title="Modifier">✎</Link>
          <button type="button" className="danger" title="Supprimer" onClick={supprimer}>⌫</button>
        </div>
      </td>
    </tr>
  );
}
