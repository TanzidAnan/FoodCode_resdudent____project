/* eslint-disable react/prop-types */
import About from '../About/About';
import Cart from '../Cart/Cart';
import './CartContainer.css'
const CartContainer = ({ handleIsActiveState, isActive,selectedProduct,hendleRemove }) => {
    return (
        <div className='w-1/2 mx-auto text-center'>
            <h1 className='text-2xl'>Cart contatiner:{selectedProduct.length}</h1>
            <div className='flex justify-around'>
                <div onClick={() => handleIsActiveState("cart")} className={`${isActive.cart ? 'btn active' : 'btn'}`}>Cart</div>
                <div onClick={() => handleIsActiveState("about")} className={`${isActive.cart ? 'btn' : 'active btn'}`}>About</div>
            </div>
            {
                isActive.cart ? <Cart selectedProduct={selectedProduct} hendleRemove={hendleRemove}></Cart> : <About></About>
            }


        </div>
    );
};

export default CartContainer;