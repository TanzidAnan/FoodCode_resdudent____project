import './CartContainer.css'
const CartContainer = ({handleIsActiveState,isActive}) => {
    return (
        <div className='w-1/2 mx-auto text-center'>
            <h1 className='text-2xl'>Cart contatiner</h1>
            <div className='flex justify-around'>
                <div onClick={() =>handleIsActiveState("cart")} className={`${isActive.cart?'btn active':'btn'}`}>Cart</div>
                <div onClick={() =>handleIsActiveState("about")} className={`${isActive.cart? 'btn':'active btn'}`}>About</div>
            </div>
        </div>
    );
};

export default CartContainer;