import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostList from './composants/PostList';

export default function Posts() {
  const posts = useSelector(state => state.posts);
  const users = useSelector(state => state.users);

  const [search, setSearch] = useState('');
  const [auteur, setAuteur] = useState('');

  const affiches = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (auteur === '' || p.userId === Number(auteur))
  );

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Posts</h1>
          <p>Publications écrites par les utilisateurs.</p>
        </div>
        <div className="header-actions">
          <Link to="/posts/nouveau" className="btn btn-primary">+ Ajouter</Link>
        </div>
      </div>

      <div className="card">
        <div className="toolbar">
          <label className="search">
            <span>⌕</span>
            <input type="search" placeholder="Rechercher par titre…" value={search} onChange={(e) => setSearch(e.target.value)} />
          </label>
          <select value={auteur} onChange={(e) => setAuteur(e.target.value)}>
            <option value="">Tous les auteurs</option>
            {users.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
          </select>
        </div>
        <PostList posts={affiches} users={users} />
      </div>
    </>
  );
}
