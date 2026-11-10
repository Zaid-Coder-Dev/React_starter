import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PostForm() {
  const { id } = useParams();
  const users = useSelector(state => state.users);
  const post = useSelector(state => state.posts).find((p) => p.id === Number(id));

  const [form, setForm] = useState({
    userId: post?.userId ?? '',
    title: post?.title ?? '',
    body: post?.body ?? '',
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
          <h1>{id ? 'Modifier : publication' : 'Créer publication'}</h1>
          <p>{id ? 'Mettez à jour les informations puis enregistrez.' : 'Complétez les informations du nouvel élément.'}</p>
        </div>
        <div className="header-actions">
          <Link to="/posts" className="btn">← Retour</Link>
        </div>
      </div>

      <form className="card form-card" onSubmit={enregistrer}>
        <p className="form-note">Les champs marqués * sont obligatoires.</p>

        <div className="form-grid">
          <div className="field full">
            <label>Auteur *</label>
            <select name="userId" value={form.userId} onChange={changer} required>
              <option value="">Choisir un auteur</option>
              {users.map((u) => <option key={u.id} value={u.id}>#{u.id} · {u.name}</option>)}
            </select>
          </div>
          <div className="field full">
            <label>Titre *</label>
            <input name="title" value={form.title} onChange={changer} placeholder="Titre" required />
          </div>
          <div className="field full">
            <label>Contenu *</label>
            <textarea name="body" value={form.body} onChange={changer} placeholder="Contenu de la publication" required />
          </div>
        </div>

        <div className="form-actions">
          <Link to="/posts" className="btn">Annuler</Link>
          <button type="submit" className="btn btn-primary">✓ Enregistrer</button>
        </div>
      </form>
    </>
  );
}
