import RecipeFilter from "./RecipeFilter";

export default function Navbar(props) {
  return (
    <header>
      <h1>Recipes</h1>

      <RecipeFilter
        search={props.search}
        setSearch={props.setSearch}
        category={props.category}
        setCategory={props.setCategory}
      />

      <button type="button" onClick={props.showModal}>
        Créer une nouvelle recette
      </button>
    </header>
  );
}