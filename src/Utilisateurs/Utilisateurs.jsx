import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserList from './composants/UserList';

export default function Utilisateurs() {
  const users = useSelector(state => state.users);
  const [search, setSearch] = useState('');

  const affiches = users.filter((u) =>
    (u.name + u.email).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Utilisateurs</h1>
          <p>Profils, coordonnées et informations des utilisateurs.</p>
        </div>
        <div className="header-actions">
          <Link to="/utilisateurs/nouveau" className="btn btn-primary">+ Ajouter</Link>
        </div>
      </div>

      <div className="card">
        <div className="toolbar">
          <label className="search">
            <span>⌕</span>
            <input type="search" placeholder="Rechercher par nom ou e-mail…" value={search} onChange={(e) => setSearch(e.target.value)} />
          </label>
        </div>
        <UserList users={affiches} />
      </div>
    </>
  );
}
