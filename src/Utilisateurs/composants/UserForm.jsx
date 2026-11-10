import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/actions';

export default function UserForm() {
  const { id } = useParams();
  const user = useSelector(state => state.users).find((u) => u.id === Number(id));
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  function changer(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function enregistrer(e) {
    e.preventDefault();
    const user = {form};

        dispatch(addUser(user));
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>{id ? 'Modifier : utilisateur' : 'Créer utilisateur'}</h1>
          <p>{id ? 'Mettez à jour les informations puis enregistrez.' : 'Complétez les informations du nouvel élément.'}</p>
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
