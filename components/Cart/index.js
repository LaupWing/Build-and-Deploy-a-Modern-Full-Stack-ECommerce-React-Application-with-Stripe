import { useRef } from "react"
import { AiOutlineLeft } from "react-icons/ai"
import { useStateContext } from "../../context/StateContext"
import CartEmpty from "./_Cart_Empty"
import CartProduct from "./_Cart_Product"
import CartTotalPrice from "./_Cart_TotalPrice"

const Cart = () => {
   const cartRef = useRef()
   const {totalPrice, totalQuantities, cartItems, setShowCart} = useStateContext()

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
               {cartItems.length >= 1 && cartItems.map(item=> <CartProduct product={item}/>)}
            </div>
            {cartItems.length >= 1 && (
               <CartTotalPrice
                  handleCheckout={()=>{}}
                  totalPrice={totalPrice}
               />
            )}
         </div>
      </div>
   )
}
 
export default Cart;