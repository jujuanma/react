import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({ products, routing }) => {

    return (
        <ul className="ListGroup">
            {products.map(product => <Item key={product.id} product={product} routing={routing}/>)}
        </ul>
    )
}

export default ItemList