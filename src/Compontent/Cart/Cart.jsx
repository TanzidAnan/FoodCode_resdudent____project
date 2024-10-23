
const Cart = ({selectedProduct,hendleRemove}) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-3 mt-4">
                {
                    
                    selectedProduct.map((product) =>
                    <div key={product.id}>
                        <div className="w-[200px] border-2 p-2">
                            <img className="w-full" src={product.img} alt="" />
                            <p>{product.name}</p>
                            <p className="font-bold text-lg">Price: ${product.price}</p>
                            <div className="flex justify-center items-center ">
                            <button onClick={() =>hendleRemove(product.id)} className="btn bg-red-400 text-black">Delete</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;