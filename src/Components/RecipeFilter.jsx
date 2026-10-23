export default function RecipeFilter(props) {
  return (
    <div className="recipe-filter">
      <input
        type="text"
        placeholder="Rechercher une recette..."
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />

      <select
        value={props.category}
        onChange={(e) => props.setCategory(e.target.value)}
      >
        <option value="">Toutes les catégories</option>
        <option value="Entrée">Entrée</option>
        <option value="Plat">Plat</option>
        <option value="Dessert">Dessert</option>
        <option value="Boisson">Boisson</option>
      </select>
    </div>
  );
}