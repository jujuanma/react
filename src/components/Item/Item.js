import './Item.css'

const Item = ({product, routing}) => {
   
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {product.name}
                </h2>
            </header>
            <picture>
                <img src={product.img} alt={product.name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${product.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <button className='Option' onClick={() => routing({ path: 'detail', id: product.id })}>Ver Detalle</button>
            </footer>
        </article>
    )
}

export default Item