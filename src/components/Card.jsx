export default function Card(props){

return(
<div className="carte">
        <h2>Inscription réussie ✓</h2>
        <p><strong>Nom :</strong> {props.resultat.prenom} {props.resultat.nom}</p>
        <p>
          <strong>Adresse :</strong> {props.resultat.adresse}
          {props.resultat.adresse2 && ", " + props.resultat.adresse2}, {props.resultat.codePostal} {props.resultat.ville}
        </p>
        <p><strong>Téléphone :</strong> {props.resultat.telephone}</p>
        <p><strong>Email :</strong> {props.resultat.email}</p>
        <p><strong>Niveau :</strong> <span className="badge">{props.resultat.niveau}</span></p>
        <button type="button" onClick={props.onClick}>Fermer</button>
      </div>
)
}