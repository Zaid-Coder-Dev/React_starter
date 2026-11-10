import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../store/actions';

export default function UserDetail() {
  const { id } = useParams();
  const userId = Number(id);
  const dispatch = useDispatch();

  const user = useSelector(state => state.users).find((u) => u.id === userId);
  const posts = useSelector(state => state.posts).filter((p) => p.userId === userId);
  const taches = useSelector(state => state.taches).filter((t) => t.userId === userId);

  if (!user) return <p className="empty">Utilisateur introuvable ou supprimé. <Link to="/utilisateurs">Retour</Link></p>;

  function supprimer() {
    if (!window.confirm('Supprimer cet utilisateur ?')) return;
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => dispatch(deleteUser(userId)));
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Détails de l'utilisateur</h1>
          <p>Informations, publications et tâches.</p>
        </div>
        <div className="header-actions">
          <Link to="/utilisateurs" className="btn">← Retour</Link>
          <Link to={`/utilisateurs/${id}/modifier`} className="btn">✎ Modifier</Link>
          <button type="button" className="btn btn-danger" onClick={supprimer}>⌫ Supprimer</button>
        </div>
      </div>

      <section className="card detail-card">
        <div className="detail-head">
          <div className="avatar">{user.name.split(' ').map((m) => m[0]).join('')}</div>
          <div>
            <h2>{user.name}</h2>
            <p>Utilisateur · Identifiant #{user.id}</p>
          </div>
        </div>

        <h3>Informations</h3>
        <dl className="info-grid">
          <div><dt>Nom d'utilisateur</dt><dd>{user.username}</dd></div>
          <div><dt>E-mail</dt><dd>{user.email}</dd></div>
          <div><dt>Téléphone</dt><dd>{user.phone}</dd></div>
          <div><dt>Site web</dt><dd>{user.website}</dd></div>
          <div><dt>Entreprise</dt><dd>{user.company?.name}</dd></div>
          <div><dt>Ville</dt><dd>{user.address?.city}</dd></div>
          {user.address && (
            <div className="full">
              <dt>Adresse</dt>
              <dd>{user.address.suite}, {user.address.street}, {user.address.zipcode} {user.address.city}</dd>
            </div>
          )}
        </dl>
      </section>

      <div className="two-cols">
        <section className="card section">
          <h3>Publications ({posts.length})</h3>
          <ul className="mini-list">
            {posts.map((p) => <li key={p.id}><Link to={`/posts/${p.id}`}>{p.title}</Link></li>)}
          </ul>
        </section>

        <section className="card section">
          <h3>Tâches ({taches.length})</h3>
          <ul className="mini-list">
            {taches.map((t) => (
              <li key={t.id}>
                <Link to={`/taches/${t.id}`}>{t.title}</Link>
                <span className={t.completed ? 'pill ok' : 'pill warn'}>{t.completed ? 'Terminée' : 'À faire'}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
