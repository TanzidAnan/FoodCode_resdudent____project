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
  console.log(isActive)

  return (
    <>
      <div className='w-10/12 mx-auto'>
        <Navber></Navber>

        <div className='flex justify-between'>
          <AllProducts></AllProducts>
          <CartContainer handleIsActiveState={handleIsActiveState} isActive={isActive}></CartContainer>
        </div>
      </div>
    </>
  )
}

export default App
