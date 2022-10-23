import React from 'react'
import { urlFor } from '../../lib/client'

const Product = () => {
   return (
      <div>
         <div className="product-detail-container">
            <div>
               <div className="image-container">
                  <img 
                     src={urlFor} 
                     alt="" 
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Product