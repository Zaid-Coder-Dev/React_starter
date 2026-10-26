export default function Cards(props) {
  return (
    <div>
      <div className="cards">
        {props.list
          .filter(
            (produit) =>
              (!props.valeur || produit.nom.includes(props.valeur)) &&
              (!props.type || produit.type === props.type)
          )
          .map((produit, index) => (
            <div className="card" key={index}>
              <h3>{produit.nom}</h3>
              <p>Type : {produit.type}</p>            </div>
          ))}
      </div>
    </div>
  );
}