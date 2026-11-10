import { Link } from 'react-router-dom';

export default function CommentItem({ commentaire }) {
  return (
    <tr>
      <td><span className="id-badge">#{commentaire.id}</span></td>
      <td>
        <div className="cell-main">
          <strong>{commentaire.name}</strong>
          <small>{commentaire.email}</small>
        </div>
      </td>
      <td>{commentaire.body}</td>
      <td><Link to={`/posts/${commentaire.postId}`}>Post #{commentaire.postId}</Link></td>
    </tr>
  );
}
