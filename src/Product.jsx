import './Product.css'
function Product(props) {
    return (
        <div className="product">
            <img src={props.url} alt={props.name} />
            <h3>{props.title}</h3>
            <p>{props.price}</p>
        </div>
    )
}


export default Product;