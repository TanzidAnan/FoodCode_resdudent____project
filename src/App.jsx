import { useState } from 'react'
import './App.css'
import AllProducts from './Compontent/AllProducts/AllProducts'
import CartContainer from './Compontent/CartContainer/CartContainer'
import Navber from './Compontent/Header/Navber'

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active"
  })
  const handleIsActiveState = (status) => {
    if (status === 'cart') {
      setIsActive({
        cart: true,
        status: "active"
      })
    }
    else {
      setIsActive({
        cart: false,
        status: "active"
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
          <CartContainer handleIsActiveState={handleIsActiveState}></CartContainer>
        </div>
      </div>
    </>
  )
}

export default App
