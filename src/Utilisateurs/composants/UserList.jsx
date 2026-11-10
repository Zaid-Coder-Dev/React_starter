import UserItem from './UserItem';

export default function UserList({ users }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Utilisateur</th>
            <th>E-mail</th>
            <th>Téléphone</th>
            <th>Ville</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => <UserItem key={u.id} user={u} />)}
          {users.length === 0 && (
            <tr><td colSpan="6" className="empty">Aucun utilisateur trouvé.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
