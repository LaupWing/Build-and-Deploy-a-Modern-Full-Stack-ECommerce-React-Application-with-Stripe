import EmptyCart from "./_Cart_Empty";
import CartProduct from "./_Cart_Product";

const Cart = () => {
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
            {cartItems.length < 1 && <EmptyCart/>}
            <div className="product-container">
               {cartItems.length >= 1 && cartItems.map(item=> <CartProduct product={item}/>)}
            </div>
         </div>
      </div>
   )
}
 
export default Cart;