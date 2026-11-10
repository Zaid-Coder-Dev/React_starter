import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Dashboard() {
  const state = useSelector(state => state);

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Vue d'ensemble des ressources de l'API.</p>
        </div>
      </div>

      <div className="stats">
        <Link to="/utilisateurs" className="card stat"><span>Utilisateurs</span><strong>{state.users.length}</strong></Link>
        <Link to="/posts" className="card stat"><span>Posts</span><strong>{state.posts.length}</strong></Link>
        <Link to="/commentaires" className="card stat"><span>Commentaires</span><strong>{state.commentaires.length}</strong></Link>
        <Link to="/taches" className="card stat"><span>Tâches</span><strong>{state.taches.length}</strong></Link>
      </div>
    </>
  );
}
