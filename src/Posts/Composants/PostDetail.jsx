import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../store/actions';

export default function PostDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const post = useSelector(state => state.posts).find((p) => p.id === Number(id));
  const auteur = useSelector(state => state.users).find((u) => u.id === post?.userId);
  const commentaires = useSelector(state => state.commentaires).filter((c) => c.postId === Number(id));

  if (!post) return <p className="empty">Publication introuvable ou supprimée. <Link to="/posts">Retour</Link></p>;

  function supprimer() {
    if (!window.confirm('Supprimer cette publication ?')) return;
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => dispatch(deletePost(post.id)));
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Détails de la publication</h1>
          <p>Contenu, auteur et commentaires.</p>
        </div>
        <div className="header-actions">
          <Link to="/posts" className="btn">← Retour</Link>
          <Link to={`/posts/${id}/modifier`} className="btn">✎ Modifier</Link>
          <button type="button" className="btn btn-danger" onClick={supprimer}>⌫ Supprimer</button>
        </div>
      </div>

      <section className="card detail-card">
        <div className="detail-head">
          <div>
            <h2>{post.title}</h2>
            <p>Publication · Identifiant #{post.id}</p>
          </div>
        </div>

        <dl className="info-grid">
          <div>
            <dt>Auteur</dt>
            <dd>{auteur && <Link to={`/utilisateurs/${auteur.id}`}>{auteur.name}</Link>}</dd>
          </div>
        </dl>

        <h3 style={{ marginTop: 24 }}>Contenu</h3>
        <p className="post-body">{post.body}</p>
      </section>

      <section className="card section" style={{ marginTop: 18 }}>
        <h3>Commentaires ({commentaires.length})</h3>
        <ul className="mini-list">
          {commentaires.map((c) => (
            <li key={c.id} className="comment">
              <strong>{c.name}</strong>
              <small>{c.email}</small>
              <p>{c.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
