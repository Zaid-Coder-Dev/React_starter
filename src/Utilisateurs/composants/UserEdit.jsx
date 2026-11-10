import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../store/actions';

export default function UserEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(state => state.users).find((u) => u.id === Number(id));

  const [form, setForm] = useState({ name: '', username: '', email: '', phone: '', website: '' });

  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  function changer(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function enregistrer(e) {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, form).then((res) => {
      dispatch(updateUser(res.data));
      alert('Utilisateur modifié');
    });
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Modifier : utilisateur</h1>
          <p>Mettez à jour les informations puis enregistrez.</p>
        </div>
        <div className="header-actions">
          <Link to="/utilisateurs" className="btn">← Retour</Link>
        </div>
      </div>

      <form className="card form-card" onSubmit={enregistrer}>
        <p className="form-note">Les champs marqués * sont obligatoires.</p>

        <div className="form-grid">
          <div className="field">
            <label>Nom complet *</label>
            <input name="name" value={form.name} onChange={changer} placeholder="Nom complet" required />
          </div>
          <div className="field">
            <label>Nom d'utilisateur *</label>
            <input name="username" value={form.username} onChange={changer} placeholder="Nom d'utilisateur" required />
          </div>
          <div className="field">
            <label>Adresse e-mail *</label>
            <input type="email" name="email" value={form.email} onChange={changer} placeholder="Adresse e-mail" required />
          </div>
          <div className="field">
            <label>Téléphone</label>
            <input name="phone" value={form.phone} onChange={changer} placeholder="Téléphone" />
          </div>
          <div className="field">
            <label>Site web</label>
            <input name="website" value={form.website} onChange={changer} placeholder="Site web" />
          </div>
        </div>

        <div className="form-actions">
          <Link to="/utilisateurs" className="btn">Annuler</Link>
          <button type="submit" className="btn btn-primary">✓ Enregistrer</button>
        </div>
      </form>
    </>
  );
}
