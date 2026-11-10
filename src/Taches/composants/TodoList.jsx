import TodoItem from './TodoItem';

export default function TodoList({ taches, users }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tâche</th>
            <th>Responsable</th>
            <th>État</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taches.map((t) => (
            <TodoItem key={t.id} tache={t} responsable={users.find((u) => u.id === t.userId)} />
          ))}
          {taches.length === 0 && (
            <tr><td colSpan="5" className="empty">Aucune tâche trouvée.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
