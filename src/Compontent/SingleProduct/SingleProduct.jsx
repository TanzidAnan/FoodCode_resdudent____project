/* eslint-disable react/prop-types */
import './SingleProduct.css'
const SingleProduct = ({ product,hendleAddToSelectedProduct }) => {
    // console.log(hendleAddToSelectedProduct)
    const { name, img, description, price, isFeature } = product;
    return (
        <div>

            <div className="cart p-3 shadow-xl rounded-xl ">
                <img className='img' src={img} alt="" />
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='text-sm text-slate-300'>{description}</p>
                <div className='text-center'>
                    <p className='font-extrabold text-2xl mt-3 text-lime-600'>$ {price}</p>
                    <p>{isFeature ? 'Feature Category' : 'not category'}</p>
                </div>
                <div className='flex  justify-center my-5'>
                    <button onClick={() =>{hendleAddToSelectedProduct(product)}} className='btn bg-orange-500 '>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;