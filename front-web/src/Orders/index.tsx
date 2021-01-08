import './styles.css'
import StepesHeader from "./StepesHeader";
import ProductsList from './ProductsList';
import { useEffect, useState } from 'react';
import { OrderLocationdata, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() {
    const[products, setProducts] = useState<Product[]>([]);
    const [orderLcoation, setOrderLocation] = useState<OrderLocationdata>(); 
    useEffect(() => {
        fetchProducts()
            .then(reponse => setProducts(reponse.data))
            .catch(error => console.log(error))
    }, []);
    
    return(
        <div className="orders-container">
            <StepesHeader />
            <ProductsList products={products} />
            <OrderLocation  onChangeLocation={location => setOrderLocation(location)}/>
        </div>
    )
}

export default Orders;