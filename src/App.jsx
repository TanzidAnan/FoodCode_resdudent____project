import { useState } from 'react'
import './App.css'
import AllProducts from './Compontent/AllProducts/AllProducts'
import CartContainer from './Compontent/CartContainer/CartContainer'
import Navber from './Compontent/Header/Navber'

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart"
  })
  const handleIsActiveState = (status) => {
    if (status === 'cart') {
      setIsActive({
        cart: true,
        status: "cart"
      })
    }
    else {
      setIsActive({
        cart: false,
        status: "about"
      })
    }
  }
  const [price, setPrice] = useState(0);

  const hendleIncricePrice = (pr) => {
    setPrice(price + pr)
  }
  const hendleDeletePrice = (id) => {
    const product = selectedProduct.find(pr => pr.id === id);
    setPrice(price -product.price)
  }
  const [selectedProduct, setSelectedProduct] = useState([]);

  const hendleRemove = (id) => {
    hendleDeletePrice(id)
    const remingProduct = selectedProduct.filter((p) => p.id !== id);
    setSelectedProduct(remingProduct)
  }


  const hendleAddToSelectedProduct = (product) => {
    const isExited = selectedProduct.find((p) => p.id === product.id);
    if (!isExited) {
      hendleIncricePrice(product.price)
      const newProduct = [...selectedProduct, product];
      setSelectedProduct(newProduct)
    }
    else {
      alert('data Added')
    }

  }



  return (
    <>
      <div className='w-10/12 mx-auto'>
        <Navber selectedProduct={selectedProduct} price={price}></Navber>

        <div className='flex justify-between'>
          <AllProducts hendleAddToSelectedProduct={hendleAddToSelectedProduct}></AllProducts>
          <CartContainer
            handleIsActiveState={handleIsActiveState}
            isActive={isActive}
            selectedProduct={selectedProduct}
            hendleRemove={hendleRemove}
          ></CartContainer>
        </div>
      </div>
    </>
  )
}

export default App
