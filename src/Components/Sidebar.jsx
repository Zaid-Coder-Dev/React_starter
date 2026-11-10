import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const ressources = [
  { to: '/utilisateurs', icone: '♙', label: 'Utilisateurs', cle: 'users' },
  { to: '/posts', icone: '▤', label: 'Posts', cle: 'posts' },
  { to: '/commentaires', icone: '☷', label: 'Commentaires', cle: 'comments' },
  { to: '/taches', icone: '✓', label: 'Tâches', cle: 'todos' },
];

export default function Sidebar({ counts = {} }) {
  return (
    <aside>
      <div className="brand">
        <div className="brand-logo">J</div>
        <div>
          <strong>JSONPlaceholder</strong>
          <small>Studio · TP React</small>
        </div>
      </div>

      <p className="nav-title">Espace de travail</p>
      <NavLink to="/" end><span className="icone">▦</span>Dashboard</NavLink>

      <p className="nav-title">Ressources API</p>
      {ressources.map((r) => (
        <NavLink key={r.to} to={r.to}>
          <span className="icone">{r.icone}</span>
          {r.label}
          {counts[r.cle] !== undefined && <span className="count">{counts[r.cle]}</span>}
        </NavLink>
      ))}
    </aside>
  );
}
