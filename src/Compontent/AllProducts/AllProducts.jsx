
import { useEffect, useState } from 'react';
import './AllProducts.css'
import SingleProduct from '../SingleProduct/SingleProduct';
// eslint-disable-next-line react/prop-types
const AllProducts = ({hendleAddToSelectedProduct}) => {
    const [products,setProducts] =useState([]);

    useEffect(() =>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])

    return (
        <div className='w-1/2'>
            <h1>All Product :{products.length}</h1>
            <div className='grid grid-cols-2'>
                {
                    products.map(product => <SingleProduct key={product.id} product={product} 
                        hendleAddToSelectedProduct={hendleAddToSelectedProduct}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;