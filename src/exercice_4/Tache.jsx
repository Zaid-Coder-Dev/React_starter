export default function Tache({ tache, basculerTache, supprimerTache }) {
  return (
    <div className="tache">
      <input
        type="checkbox"
        checked={tache.statut === "Terminé"}
        onChange={() => basculerTache(tache.id)}
      />

      <span
        style={{
          textDecoration: tache.statut === "Terminé" ? "line-through" : "none",margin:'5px 20px'
        }}
      >
        {tache.titre} — {tache.statut}
      </span>

      <button onClick={() => supprimerTache(tache.id)}>Supprimer</button>
    </div>
  );
}
