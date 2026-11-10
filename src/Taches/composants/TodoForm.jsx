import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function TodoForm() {
  const { id } = useParams();
  const users = useSelector(state => state.users);
  const tache = useSelector(state => state.taches).find((t) => t.id === Number(id));

  const [form, setForm] = useState({
    title: tache?.title ?? '',
    userId: tache?.userId ?? '',
    completed: tache?.completed ?? false,
  });

  function changer(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function enregistrer(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>{id ? 'Modifier : tâche' : 'Créer tâche'}</h1>
          <p>{id ? 'Mettez à jour les informations puis enregistrez.' : 'Complétez les informations du nouvel élément.'}</p>
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
            <select name="completed" value={String(form.completed)} onChange={changer}>
              <option value="false">À faire</option>
              <option value="true">Terminée</option>
            </select>
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
