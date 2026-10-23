
import { useState } from "react";
import RecipeItem from "./RecipeItem";
import RecipeForm from "./RecipeForm";
import Navbar from "./Navbar";
import Aide from "./Aide";


const list = [
  { id: 1, name: "Lasagne maison", category: "Plat", ingredients: ["Pâtes à lasagne", "Viande hachée", "Sauce tomate", "Béchamel", "Fromage"], description: "Lasagne gratinée et généreuse.", difficulty: 4, image: "lasagne.jpg", createdAt: "2026-10-23T12:47:37" },
  { id: 2, name: "Salade fraîcheur", category: "Entrée", ingredients: ["Laitue", "Tomate", "Concombre", "Olives", "Huile d'olive"], description: "Salade légère pour bien commencer le repas.", difficulty: 1, image: "salad.jpg", createdAt: "2026-10-23T12:50:10" },
  { id: 3, name: "Soupe du jour", category: "Entrée", ingredients: ["Carotte", "Pomme de terre", "Oignon", "Bouillon"], description: "Soupe chaude et réconfortante.", difficulty: 2, image: "soup.jpg", createdAt: "2026-10-23T12:55:42" },
  { id: 4, name: "Gâteau au chocolat", category: "Dessert", ingredients: ["Chocolat", "Farine", "Oeufs", "Sucre", "Beurre"], description: "Gâteau moelleux au chocolat.", difficulty: 3, image: "cake.jpg", createdAt: "2026-10-23T13:02:05" },
  { id: 5, name: "Pancakes", category: "Dessert", ingredients: ["Farine", "Lait", "Oeufs", "Sucre", "Miel"], description: "Pancakes moelleux pour le petit-déjeuner.", difficulty: 2, image: "pancakes.jpg", createdAt: "2026-10-23T13:10:30" },
  { id: 6, name: "Penne arrabiata", category: "Plat", ingredients: ["Penne", "Tomate", "Ail", "Piment", "Persil"], description: "Pâtes épicées à la sauce tomate.", difficulty: 2, image: "pasta.jpg", createdAt: "2026-10-23T13:15:00" },
  { id: 7, name: "Poulet rôti", category: "Plat", ingredients: ["Poulet", "Citron", "Ail", "Thym", "Pommes de terre"], description: "Poulet doré et parfumé au four.", difficulty: 3, image: "chicken.jpg", createdAt: "2026-10-23T13:20:45" },
  { id: 8, name: "Tarte aux fruits", category: "Dessert", ingredients: ["Pâte sablée", "Fruits de saison", "Crème", "Sucre"], description: "Tarte fruitée et croustillante.", difficulty: 3, image: "tart.jpg", createdAt: "2026-10-23T13:30:12" },
  { id: 9, name: "Boisson fraîche 1", category: "Boisson", ingredients: ["Jus de fruits", "Glaçons", "Menthe"], description: "Boisson fraîche et fruitée.", difficulty: 1, image: "drink1.jpg", createdAt: "2026-10-23T13:35:00" },
  { id: 10, name: "Boisson fraîche 2", category: "Boisson", ingredients: ["Citron", "Sucre", "Eau gazeuse", "Glaçons"], description: "Boisson pétillante et rafraîchissante.", difficulty: 1, image: "drink2.jpg", createdAt: "2026-10-23T13:40:00" },
];

export default function RecipeList() {
  const [recipes, setRecipes] = useState(list);
  const [Modal, setModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");


  function showModal() {
    setSelectedRecipe(null);
    setModal(true);
  }

  function ajouterRecipe(recipe) {
    setRecipes([...recipes, recipe]);
    setModal(false);
  }

  function edit(recipe) {
    setSelectedRecipe(recipe);
    setModal(true);
  }

  function editRecipe(recipe) {
    setRecipes(recipes.map((r) => r.id === recipe.id ? recipe : r));
    setModal(false);
  }

  function duplicate(recipe) {
    setRecipes([
      ...recipes,
      { ...recipe, id: Date.now(), createdAt: new Date().toISOString() }
    ]);
  }

  function del(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <div>
     <Navbar
  showModal={showModal}
  search={search}
  setSearch={setSearch}
  category={category}
  setCategory={setCategory}
/>

    <Aide/>
    {Modal && (
  <div className="modal-overlay">
    <div className="modal-content">
      <button
        className="modal-close"
        onClick={() => setModal(false)}
      >
        ✕
      </button>

      <RecipeForm
        key={selectedRecipe ? selectedRecipe.id : "new"}
        recipe={selectedRecipe}
        ajouterRecipe={ajouterRecipe}
        editRecipe={editRecipe}
      />
    </div>
  </div>
)}
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            openModal={() => edit(recipe)}
            duplicate={() => duplicate(recipe)}
            delete={() => del(recipe.id)}
          />
        ))}
      </div>

      
    </div>
  );
}