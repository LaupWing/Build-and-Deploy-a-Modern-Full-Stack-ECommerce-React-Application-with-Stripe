import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Quantity = () => {
   return (
      <div className="quantity">
         <h3>Quantity</h3>
         <p className="quantity-desc">
            <span
               className="minus"
               onClick={() => { }}
            >
               <AiOutlineMinus />
            </span>
            <span className="num">
               0
            </span>
            <span
               className="plus"
               onClick={() => { }}
            >
               <AiOutlinePlus />
            </span>
         </p>
      </div>
   )
}

export default Quantity