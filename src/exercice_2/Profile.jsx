
import { useState } from "react";

export default function Profile() {
  const [isVisible, setVisibility] = useState(false);

  let list = {
    nom: "zaid",
    filiere: "dev_202"
  };

  return (
    <div className="profile">
      <h2>Mon profil étudiant</h2>

      {isVisible && (
        <div className="profile-info">
          <p><strong>Nom :</strong> {list.nom}</p>
          <p><strong>Filière :</strong> {list.filiere}</p>
        </div>
      )}

      {!isVisible && (
        <p className="hidden-message">
          Les informations sont masquées
        </p>
      )}

      <button onClick={() => setVisibility(!isVisible)}>
        {isVisible ? "Masquer mon profil" : "Afficher mon profil"}
      </button>
    </div>
  );
}
