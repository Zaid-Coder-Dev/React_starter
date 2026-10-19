import Produit_card from "./Produit_card";

let products = [ 
{ id: 1, name: "Clavier", price: 150, stock: true }, 
{ id: 2, name: "Souris", price: 80, stock: true }, 
{ id: 3, name: "Écran", price: 1200, stock: false }, 
{ id: 4, name: "Casque", price: 250, stock: true } 
]; 

export default function ProductList() {

  return (
    <div className="products-grid">
      {products.map((product) => (
        <Produit_card key={product.id} product={product} />
      ))}
    </div>
  );
}