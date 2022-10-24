import { createContext, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

const Context = createContext()

export const StateContext = ({children}) =>{
   const [showCart, setShowCart] = useState(false)
   const [cartItems, setCartItems] = useState()
   const [totalPrice, setTotalPrice] = useState()
   const [totalQuantities, setTotalQuantities] = useState()
   const [quantity, setQuantity] = useState(1)

   const increaseQuantity = () =>{
      setQuantity((prevQuantity)=> prevQuantity + 1)
   }
   const decreaseQuantity = () =>{
      setQuantity((prevQuantity)=> (prevQuantity - 1) < 1 ? 1 : prevQuantity - 1)
   }

   return (
      <Context.Provider
         value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            quantity,
            increaseQuantity,
            decreaseQuantity
         }}
      >
         {children}
      </Context.Provider>
   )
}
