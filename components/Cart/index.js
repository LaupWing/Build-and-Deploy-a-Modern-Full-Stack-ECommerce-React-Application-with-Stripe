import { useRef } from "react"
import toast from "react-hot-toast"
import { AiOutlineLeft } from "react-icons/ai"
import { useStateContext } from "../../context/StateContext"
import getStripe from "../../lib/getStripe"
import CartEmpty from "./_Cart_Empty"
import CartProduct from "./_Cart_Product"
import CartTotalPrice from "./_Cart_TotalPrice"

const Cart = () => {
   const cartRef = useRef()
   const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove} = useStateContext()

   const handleCheckout = async ()=>{
      const stripe = await getStripe()

      const response = await fetch("/api/stripe", {
         method: "POST",
         headers:{
            "Content-Type": "application/json"
         },
         body: JSON.stringify(cartItems)
      })

      if(response.statusCode === 500)  return

      const data = await response.json()
      toast.loading("Redirecting...")
      stripe.redirectToCheckout({sessionId: data.id})
   }

   return (
      <div className="cart-wrapper" ref={cartRef}>
         <div className="cart-container">
            <button
               type="button"
               className="cart-heading"
               onClick={()=>{setShowCart(false)}}
            >
               <AiOutlineLeft/>
               <span className="heading">Your Cart</span>
               <span className="cart-num-items">({totalQuantities} items)</span>
            </button>
            {cartItems.length < 1 && <CartEmpty/>}
            <div className="product-container">
               {cartItems.length >= 1 && cartItems.map(item=> (
                  <CartProduct 
                     product={item}
                     toggleCartItemQuantity={toggleCartItemQuantity}
                     onRemove={onRemove}
                  />
               ))}
            </div>
            {cartItems.length >= 1 && (
               <CartTotalPrice
                  handleCheckout={handleCheckout}
                  totalPrice={totalPrice}
               />
            )}
         </div>
      </div>
   )
}
 
export default Cart;