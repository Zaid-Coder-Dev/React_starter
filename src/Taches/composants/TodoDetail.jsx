import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTache } from '../../store/actions';

export default function TodoDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const tache = useSelector(state => state.taches).find((t) => t.id === Number(id));
  const responsable = useSelector(state => state.users).find((u) => u.id === tache?.userId);

  if (!tache) return <p className="empty">Tâche introuvable ou supprimée. <Link to="/taches">Retour</Link></p>;

  function supprimer() {
    if (!window.confirm('Supprimer cette tâche ?')) return;
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => dispatch(deleteTache(tache.id)));
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Détails de la tâche</h1>
          <p>Responsable et état d'avancement.</p>
        </div>
        <div className="header-actions">
          <Link to="/taches" className="btn">← Retour</Link>
          <Link to={`/taches/${id}/modifier`} className="btn">✎ Modifier</Link>
          <button type="button" className="btn btn-danger" onClick={supprimer}>⌫ Supprimer</button>
        </div>
      </div>

      <section className="card detail-card">
        <div className="detail-head">
          <div>
            <h2>{tache.title}</h2>
            <p>Tâche · Identifiant #{tache.id}</p>
          </div>
        </div>

        <dl className="info-grid">
          <div><dt>État</dt><dd>{tache.completed ? 'Terminée' : 'À faire'}</dd></div>
          <div>
            <dt>Responsable</dt>
            <dd>{responsable && <Link to={`/utilisateurs/${responsable.id}`}>{responsable.name}</Link>}</dd>
          </div>
        </dl>
      </section>
    </>
  );
}
