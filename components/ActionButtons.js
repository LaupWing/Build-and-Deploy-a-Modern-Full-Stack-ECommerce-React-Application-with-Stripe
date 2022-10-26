import React from 'react'
import { useStateContext } from '../context/StateContext'

const ActionButtons = ({product}) => {
   const {onAdd, setShowCart, quantity} = useStateContext()
   
   const handleBuyNow = ()=>{
      onAdd(product, quantity)
      setShowCart(true)
   }

   return (
      <div className="buttons">
         <button
            className="add-to-cart"
            type="button"
            onClick={()=>onAdd(product)}
         >
            Add to Cart
         </button>
         <button
            className="buy-now"
            type="button"
            onClick={handleBuyNow}
         >
            Buy now
         </button>
      </div>
   )
}

export default ActionButtons