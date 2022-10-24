import React from 'react'

const ActionButtons = () => {
   return (
      <div className="buttons">
         <button
            className="add-to-cart"
            type="button"
         >
            Add to Cart
         </button>
         <button
            className="buy-now"
            type="button"
         >
            Buy now
         </button>
      </div>
   )
}

export default ActionButtons