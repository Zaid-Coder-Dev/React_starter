import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTache } from '../../store/actions';

export default function TodoItem({ tache, responsable }) {
  const dispatch = useDispatch();

  function supprimer() {
    if (!window.confirm('Supprimer cette tâche ?')) return;
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${tache.id}`)
      .then(() => dispatch(deleteTache(tache.id)));
  }

  return (
    <tr>
      <td><span className="id-badge">#{tache.id}</span></td>
      <td><strong>{tache.title}</strong></td>
      <td><span className="pill">{responsable?.name}</span></td>
      <td>
        <span className={tache.completed ? 'pill ok' : 'pill warn'}>
          {tache.completed ? 'Terminée' : 'À faire'}
        </span>
      </td>
      <td>
        <div className="row-actions">
          <Link to={`/taches/${tache.id}`} title="Voir">↗</Link>
          <Link to={`/taches/${tache.id}/modifier`} title="Modifier">✎</Link>
          <button type="button" className="danger" title="Supprimer" onClick={supprimer}>⌫</button>
        </div>
      </td>
    </tr>
  );
}
