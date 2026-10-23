export default function RecipeItem(props) {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        {props.recipe.image && (
          <img
            src={process.env.PUBLIC_URL + "/recipes/" + props.recipe.image}
            alt={props.recipe.name}
          />
        )}
      </div>

      <div className="recipe-body">
        <div className="recipe-header">
          <h3 className="recipe-title">{props.recipe.name}</h3>
          <span className="recipe-category">{props.recipe.category}</span>
        </div>

        <p className="recipe-description">{props.recipe.description}</p>

        <div className="ingredients">
          {props.recipe.ingredients.map((ing, index) => (
            <span className="ingredient" key={index}>
              {ing}
            </span>
          ))}
        </div>

        <div className="difficulty">
          Difficulté: {"🔥".repeat(props.recipe.difficulty)}
        </div>

        <div className="created">
          Créée: {new Date(props.recipe.createdAt).toLocaleString("fr-FR")}
        </div>

        <div className="actions">
          <button className="btn-edit" onClick={props.openModal}>
            Modifier
          </button>

          <button className="btn-duplicate" onClick={props.duplicate}>
            Dupliquer
          </button>

          <button className="btn-delete" onClick={props.delete}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}