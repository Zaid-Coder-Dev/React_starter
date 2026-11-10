import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTache } from '../../store/actions';

const vide = { title: '', userId: '', completed: false };

export default function TodoAdd() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [form, setForm] = useState(vide);

  function changer(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function enregistrer(e) {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/todos', { ...form, userId: Number(form.userId) }).then((res) => {
      dispatch(addTache(res.data));
      setForm(vide);
      alert('Tâche ajoutée');
    });
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Créer tâche</h1>
          <p>Complétez les informations du nouvel élément.</p>
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
