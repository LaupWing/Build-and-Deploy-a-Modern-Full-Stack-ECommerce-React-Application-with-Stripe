const CartTotalPrice = ({totalPrice, handleCheckout}) => {
   return (
      <div className="cart-bottom">
         <div className="total">
            <h3>Subtotal:</h3>
            <h3>${totalPrice}</h3>
         </div>
         <div className="btn-container">
            <button
               type="button"
               className="btn"
               onClick={handleCheckout}
            >
               pay with stripe
            </button>
         </div>
      </div>
   )
}

export default CartTotalPrice