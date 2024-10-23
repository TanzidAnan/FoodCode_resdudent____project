import './CartContainer.css'
const CartContainer = ({handleIsActiveState}) => {
    return (
        <div className='w-1/2 mx-auto text-center'>
            <h1 className='text-2xl'>Cart contatiner</h1>
            <div className='flex justify-around'>
                <div onClick={() =>handleIsActiveState("cart")} className='btn'>Cart</div>
                <div onClick={() =>handleIsActiveState("about")} className='btn'>About</div>
            </div>
        </div>
    );
};

export default CartContainer;