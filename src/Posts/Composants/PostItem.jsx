import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/actions';

export default function PostItem({ post, auteur }) {
  const dispatch = useDispatch();

  function supprimer() {
    if (!window.confirm('Supprimer cette publication ?')) return;
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
      .then(() => dispatch(deletePost(post.id)));
  }

  return (
    <tr>
      <td><span className="id-badge">#{post.id}</span></td>
      <td><strong>{post.title}</strong></td>
      <td><span className="pill">{auteur?.name}</span></td>
      <td>{post.body.slice(0, 45)}…</td>
      <td>
        <div className="row-actions">
          <Link to={`/posts/${post.id}`} title="Voir">↗</Link>
          <Link to={`/posts/${post.id}/modifier`} title="Modifier">✎</Link>
          <button type="button" className="danger" title="Supprimer" onClick={supprimer}>⌫</button>
        </div>
      </td>
    </tr>
  );
}
