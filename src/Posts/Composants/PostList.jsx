import PostItem from './PostItem';

export default function PostList({ posts, users }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Extrait</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <PostItem key={p.id} post={p} auteur={users.find((u) => u.id === p.userId)} />
          ))}
          {posts.length === 0 && (
            <tr><td colSpan="5" className="empty">Aucune publication trouvée.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
