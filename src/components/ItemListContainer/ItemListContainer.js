import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncmock'



const ItemListContainer = ({ routing })=> {
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        getProducts().then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProducts()
        })          
    }, [])
    
    return (
        <div className="ItemListContainer">
            <ItemList products={products} routing={routing}/>
        </div>
    )    
    
}

export default ItemListContainer