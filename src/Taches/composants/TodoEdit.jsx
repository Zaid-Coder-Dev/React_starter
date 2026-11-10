import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTache } from '../../store/actions';

export default function TodoEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const tache = useSelector(state => state.taches).find((t) => t.id === Number(id));

  const [form, setForm] = useState({ title: '', userId: '', completed: false });

  useEffect(() => {
    if (tache) setForm(tache);
  }, [tache]);

  function changer(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function enregistrer(e) {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { ...form, userId: Number(form.userId) }).then((res) => {
      dispatch(updateTache(res.data));
      alert('Tâche modifiée');
    });
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Modifier : tâche</h1>
          <p>Mettez à jour les informations puis enregistrez.</p>
        </div>
        <div className="header-actions">
          <Link to="/taches" className="btn">← Retour</Link>
        </div>
      </div>

      <form className="card form-card" onSubmit={enregistrer}>
        <p className="form-note">Les champs marqués * sont obligatoires.</p>

        <div className="form-grid">
          <div className="field full">
            <label>Titre *</label>
            <input name="title" value={form.title} onChange={changer} placeholder="Titre de la tâche" required />
          </div>
          <div className="field">
            <label>Responsable *</label>
            <select name="userId" value={form.userId} onChange={changer} required>
              <option value="">Choisir un responsable</option>
              {users.map((u) => <option key={u.id} value={u.id}>#{u.id} · {u.name}</option>)}
            </select>
          </div>
          <div className="field">
            <label>État</label>
            <label>
              <input type="checkbox" checked={form.completed} onChange={(e) => setForm({ ...form, completed: e.target.checked })} />
              {' '}Terminée
            </label>
          </div>
        </div>

        <div className="form-actions">
          <Link to="/taches" className="btn">Annuler</Link>
          <button type="submit" className="btn btn-primary">✓ Enregistrer</button>
        </div>
      </form>
    </>
  );
}
