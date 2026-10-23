import { useState } from "react";


export default function RecipeForm(props) {
  const [nom, setNom] = useState(props.recipe ? props.recipe.name : "");
  const [categorie, setCategorie] = useState(props.recipe ? props.recipe.category : "Plat");
  const [ingredients, setIngredients] = useState(props.recipe ? props.recipe.ingredients : [""]);
  const [difficulte, setDifficulte] = useState(props.recipe ? props.recipe.difficulty : 1);
  const [description, setDescription] = useState(props.recipe ? props.recipe.description : "");
  const [image, setImage] = useState(null);

  function modifierIngredient(index, valeur) {
    const nouveauIngredients = [...ingredients];
    nouveauIngredients[index] = valeur;
    setIngredients(nouveauIngredients);
  }

  function supprimerIngredient(index) {
    setIngredients(ingredients.filter((ingredient, i) => i !== index));
  }

  function sendRecipe(e) {
    e.preventDefault();

    const recipe = {
      id: props.recipe ? props.recipe.id : Date.now(),
      name: nom,
      category: categorie,
      ingredients: ingredients,
      difficulty: difficulte,
      description: description,
      image: image || (props.recipe ? props.recipe.image : ""),
      createdAt: props.recipe ? props.recipe.createdAt : new Date().toISOString()
    };

    if (props.recipe) {
      props.editRecipe(recipe);
    } else {
      props.ajouterRecipe(recipe);
    }
  }

  return (
    <form className="recipe-form" onSubmit={sendRecipe}>
      <label>Nom :</label>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        required
      />

      <label>Catégorie :</label>
      <select
        value={categorie}
        onChange={(e) => setCategorie(e.target.value)}
      >
        <option value="Entrée">Entrée</option>
        <option value="Plat">Plat</option>
        <option value="Dessert">Dessert</option>
        <option value="Boisson">Boisson</option>
      </select>

      <label>Ingrédients :</label>

      {ingredients.map((ingredient, index) => (
        <div className="ingredient-row" key={index}>
          <input
            type="text"
            value={ingredient}
            onChange={(e) => modifierIngredient(index, e.target.value)}
            required
          />

          <button
            type="button"
            onClick={() => supprimerIngredient(index)}
            disabled={ingredients.length === 1}
          >
            −
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => setIngredients([...ingredients, ""])}
      >
        + Ajouter un ingrédient
      </button>

      <label>Difficulté : {difficulte}/5</label>
      <input
        type="range"
        min="1"
        max="5"
        value={difficulte}
        onChange={(e) => setDifficulte(Number(e.target.value))}
      />

      <label>Description :</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>Image :</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit">Enregistrer</button>
    </form>
  );
}