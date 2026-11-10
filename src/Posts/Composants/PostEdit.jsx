import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost } from '../../store/actions';

export default function PostEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const post = useSelector(state => state.posts).find((p) => p.id === Number(id));

  const [form, setForm] = useState({ userId: '', title: '', body: '' });

  useEffect(() => {
    if (post) setForm(post);
  }, [post]);

  function changer(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function enregistrer(e) {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { ...form, userId: Number(form.userId) }).then((res) => {
      dispatch(updatePost(res.data));
      alert('Publication modifiée');
    });
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Modifier : publication</h1>
          <p>Mettez à jour les informations puis enregistrez.</p>
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
