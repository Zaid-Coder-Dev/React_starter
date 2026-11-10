import { useState } from 'react';
import { useSelector } from 'react-redux';
import CommentList from './composants/CommentList';

export default function Commentaires() {
  const commentaires = useSelector(state => state.commentaires);
  const [search, setSearch] = useState('');

  const affiches = commentaires.filter((c) =>
    (c.name + c.email).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Commentaires</h1>
          <p>Réactions laissées sous les publications.</p>
        </div>
      </div>

      <div className="card">
        <div className="toolbar">
          <label className="search">
            <span>⌕</span>
            <input type="search" placeholder="Rechercher par nom ou e-mail…" value={search} onChange={(e) => setSearch(e.target.value)} />
          </label>
        </div>
        <CommentList commentaires={affiches} />
      </div>
    </>
  );
}
