import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'

const Quantity = () => {
   const {increaseQuantity, decreaseQuantity, quantity} = useStateContext()

   return (
      <div className="quantity">
         <h3>Quantity</h3>
         <p className="quantity-desc">
            <span
               className="minus"
               onClick={decreaseQuantity}
            >
               <AiOutlineMinus />
            </span>
            <span className="num">
               {quantity}
            </span>
            <span
               className="plus"
               onClick={increaseQuantity}
            >
               <AiOutlinePlus />
            </span>
         </p>
      </div>
   )
}

export default Quantity