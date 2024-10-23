/* eslint-disable react/prop-types */
import './SingleProduct.css'
const SingleProduct = ({ product }) => {
    console.log(product)
    const { name, img, description, price, category, isFeature } = product;
    return (
        <div>

            <div className="cart p-3">
                <img className='img' src={img} alt="" />
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='text-sm text-slate-300'>{description}</p>
                <div className='text-center'>
                    <p className='font-extrabold'>Price: $ {price}</p>
                    <p>{isFeature ? 'Feature Category' : 'not category'}</p>
                </div>
                <div className='flex items-center justify-center my-5'>
                    <button className='btn bg-orange-500 '>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;