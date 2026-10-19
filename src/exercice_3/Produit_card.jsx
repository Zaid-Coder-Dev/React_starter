export default function Produit_card({product}){

    // ({ product }) is a shorter way to write (props) plus let product = props.product.

    return(
    
        <div className="product-card">
        <div className="product-top">
            <span className="product-id">#{product.id}</span>

            <span >
            {product.stock ? "Disponible" : "Rupture de stock"}
            </span>
        </div>

        <h2>{product.name}</h2>

        <div className="product-bottom">
            <strong>{product.price} DH</strong>
        </div>
        </div>

)
}