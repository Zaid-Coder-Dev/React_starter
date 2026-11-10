import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TodoList from './composants/TodoList';

export default function Taches() {
  const taches = useSelector(state => state.taches);
  const users = useSelector(state => state.users);

  const [etat, setEtat] = useState('');
  const [responsable, setResponsable] = useState('');

  const terminees = taches.filter((t) => t.completed).length;

  const affichees = taches.filter((t) =>
    (etat === '' || t.completed === (etat === 'done')) &&
    (responsable === '' || t.userId === Number(responsable))
  );

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Tâches</h1>
          <p>Tâches des utilisateurs et leur état d'avancement.</p>
        </div>
        <div className="header-actions">
          <Link to="/taches/nouveau" className="btn btn-primary">+ Ajouter</Link>
        </div>
      </div>

      <div className="stats">
        <div className="card stat"><span>Total</span><strong>{taches.length}</strong></div>
        <div className="card stat ok"><span>Terminées</span><strong>{terminees}</strong></div>
        <div className="card stat warn"><span>Restantes</span><strong>{taches.length - terminees}</strong></div>
      </div>

      <div className="card">
        <div className="toolbar">
          <select value={etat} onChange={(e) => setEtat(e.target.value)}>
            <option value="">Toutes les tâches</option>
            <option value="done">Terminées</option>
            <option value="todo">À faire</option>
          </select>
          <select value={responsable} onChange={(e) => setResponsable(e.target.value)}>
            <option value="">Tous les responsables</option>
            {users.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
          </select>
        </div>
        <TodoList taches={affichees} users={users} />
      </div>
    </>
  );
}
