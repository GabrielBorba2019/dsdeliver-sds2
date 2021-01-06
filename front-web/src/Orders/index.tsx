import './styles.css'
import StepesHeader from "./StepesHeader";
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';

function Orders() {
    const[products, setProducts] = useState<Product[]>([]);
    console.log(products)
    useEffect(() => {
        fetchProducts()
            .then(reponse => setProducts(reponse.data))
            .catch(error => console.log(error))
    }, []);




    return(
        <div className="orders-container">
            <StepesHeader />
            <ProductsList products={products} />
        </div>
    )
}

export default Orders;