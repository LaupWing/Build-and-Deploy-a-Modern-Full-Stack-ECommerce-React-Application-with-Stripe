import { createContext, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

const Context = createContext()

export const StateContext = ({children}) =>{
   const [showCart, setShowCart] = useState(false)
   const [cartItems, setCartItems] = useState([])
   const [totalPrice, setTotalPrice] = useState(0)
   const [totalQuantities, setTotalQuantities] = useState(0)
   const [quantity, setQuantity] = useState(1)

   let foundProduct 
   let index

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

   const onRemove = (product)=>{
      setCartItems([...cartItems].filter(item => item._id !== product._id))
      setTotalPrice((prevTotalPrice)=> prevTotalPrice - (product.price * product.quantity))
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities - product.quantity)
   }

   const toggleCartItemQuantity = (id, value)=>{
      foundProduct = cartItems.find(item => item._id === id)
      index = cartItems.findIndex(item => item._id === id)

      if(value === "inc"){
         setCartItems([...cartItems].map(item => item._id === id ? 
            {...item, quantity: item.quantity + 1}:
            item
         ))
         setTotalPrice((prevTotalPrice)=> prevTotalPrice + foundProduct.price)
         setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
      } else if (value === "dec"){
         if(foundProduct.quantity > 1){
            setCartItems([...cartItems].map(item => item._id === id ? 
               {...item, quantity: item.quantity - 1}:
               item
            ))
            setTotalPrice((prevTotalPrice)=> prevTotalPrice - foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
         }
      }
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
            setShowCart,
            onRemove,
            toggleCartItemQuantity,
            setTotalPrice,
            setTotalQuantities,
            setCartItems
         }}
      >
         {children}
      </Context.Provider>
   )
}

export const useStateContext = () => useContext(Context)