import { createContext, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

const Context = createContext()

export const StateContext = ({children}) =>{
   const [showCart, setShowCart] = useState(false)
   const [cartItems, setCartItems] = useState([])
   const [totalPrice, setTotalPrice] = useState(0)
   const [totalQuantities, setTotalQuantities] = useState(0)
   const [quantity, setQuantity] = useState(1)

   const onAdd = (product)=>{
      const checkProductInCart = cartItems.find((item)=>item._id === product._id)
      setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.price * quantity)
      setTotalQuantities((prevTotalQuantities)=> prevTotalQuantities + quantity)

      if(checkProductInCart){

         const updatedCartItems = cartItems.map(cartProduct => {
            if(cartProduct._id === product._id){
               return {
                  ...cartProduct,
                  quantity: cartProduct.quantity + quantity
               }
            }
         })
         setCartItems(updatedCartItems)
      } else{
         product.quantity = quantity
         setCartItems([...cartItems, {...product}])
      }
      toast.success(`${quantity} ${product.name} added to the cart`)
   }

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
            decreaseQuantity,
            onAdd,
            setShowCart
         }}
      >
         {children}
      </Context.Provider>
   )
}

export const useStateContext = () => useContext(Context)