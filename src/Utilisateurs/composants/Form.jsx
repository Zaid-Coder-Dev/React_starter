import { useState } from 'react';
import './Form.css';

export default function ModifierU() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [siteWeb, setSiteweb] = useState('');

  function modifier(e) {
    e.preventDefault();

}

  return (
    <div className="modifier-container">
      <form className="modifier-card" onSubmit={modifier}>
        <h2>Modifier l'utilisateur</h2>
        <p>Modifiez les informations de l'utilisateur.</p>

        <div className="modifier-field">
          <label>Nom complet</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Entrez le nom"
            required
          />
        </div>

        <div className="modifier-field">
          <label>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@email.com"
            required
          />
        </div>

        <div className="modifier-field">
          <label>Téléphone</label>
          <input
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="Entrez le téléphone"
            required
          />
        </div>

        <div className="modifier-field">
          <label>siteWeb</label>
          <input
            type="url"
            value={siteWeb}
            onChange={(e) => setSiteweb(e.target.value)}
            placeholder="www.*****.##"
            required
          />
        </div>


        <div className="modifier-actions">
          <button type="button" className="annuler-btn">
            Annuler
          </button>

          <button type="submit" className="enregistrer-btn">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}