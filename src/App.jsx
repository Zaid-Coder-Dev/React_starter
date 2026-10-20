import Champ from "./exercice_1/Champ";
import Profile from "./exercice_2/Profile";
import ProductList from "./exercice_3/ProductList";
import { ListeTaches } from "./exercice_4/ListeTaches";
import FavoriteMovies from "./exercice_5/FavoriteMovie";
import "./App.css";



function App() {
  return (

    <div className="app">
        <h1>TP2 - JSX - PROPS , STATE, FORMS</h1>
      <section className="exercice">
        <h1 className="succes">Exercice 1</h1>
        <Champ />
      </section>

      <section className="exercice">
        <h1 className="succes">Exercice 2</h1>
        <Profile />
      </section>

      <section className="exercice">
        <h1 className="succes">Exercice 3</h1>
        <ProductList />
      </section>

      <section className="exercice">
        <h1 className="succes">Exercice 4</h1>
        <ListeTaches/>
      </section>

      <section className="exercice">
        <h1 className="succes">Exercice 5</h1>
        <FavoriteMovies/>
      </section>

    </div>
  );
}

export default App;
