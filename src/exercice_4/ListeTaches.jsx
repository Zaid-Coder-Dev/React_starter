
import { useState } from "react";
import Tache from "./Tache"
export function ListeTaches() {
  const [taches, setTaches] = useState([
    { id: 5, titre: "Maîtriser UML", statut: "Terminé" },
    { id: 7, titre: "Réviser JS", statut: "En cours" }
  ]);

  const [titre, setTitre] = useState("");

  function basculerTache(id) {
    setTaches(
      taches.map((tache) => {
        if (tache.id === id) {
          return {
            ...tache,
            statut:
              tache.statut === "Terminé" ? "En cours" : "Terminé"
          };
        } else {
          return tache;
        }
      })
    );
  }

  function supprimerTache(id) {
    setTaches(taches.filter((tache) => tache.id !== id));
  }

  function creer_ajouter(e) {
    e.preventDefault();

    if (titre.trim() === "") return;

    const nouvelleTache = {
      id: Math.max(0, ...taches.map((tache) => tache.id)) + 1,
      titre: titre.trim(),
      statut: "En cours"
    };

    setTaches([...taches, nouvelleTache]);
    setTitre("");
  }

  return (
    <div className="taches">
      <form onSubmit={creer_ajouter}>
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
          placeholder="Titre de la tâche"
        />

        <button type="submit">Ajouter</button>
      </form>

      {taches.length === 0 ? (
        <p>Aucune tâche pour le moment</p>
      ) : (
        taches.map((tache) => (
          <Tache
            key={tache.id}
            tache={tache}
            basculerTache={basculerTache}
            supprimerTache={supprimerTache}
          />
        ))
      )}

      <p className="compteur">
  {taches.filter((tache) => tache.statut !== "Terminé").length}
  {" "}tâche(s) restante(s) sur {taches.length}
    </p>
    </div>
  );
}
