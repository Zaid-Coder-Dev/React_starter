import CommentItem from './CommentItem';

export default function CommentList({ commentaires }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Commentaire</th>
            <th>Contenu</th>
            <th>Publication</th>
          </tr>
        </thead>
        <tbody>
          {commentaires.map((c) => <CommentItem key={c.id} commentaire={c} />)}
          {commentaires.length === 0 && (
            <tr><td colSpan="4" className="empty">Aucun commentaire trouvé.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
