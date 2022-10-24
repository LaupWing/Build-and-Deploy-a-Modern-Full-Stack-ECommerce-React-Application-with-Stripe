import React from 'react'
import { useStateContext } from '../context/StateContext'

const ActionButtons = () => {
   const {onAdd} = useStateContext()
   
   return (
      <div className="buttons">
         <button
            className="add-to-cart"
            type="button"
            onClick={onAdd}
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