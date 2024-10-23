
const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>HOME</a></li>
                        <li><a>Product</a></li>
                        <li><a>cart 1</a></li>
                        <li><a>$ 500</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;