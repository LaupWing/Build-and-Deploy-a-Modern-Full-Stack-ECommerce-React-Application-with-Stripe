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

export const getServerSideProps = async ()=>{
   const query = "*[_type == 'product']"
   const products = await client.fetch(query)

   const bannerQuery = "*[_type == 'banner']"
   const banner = await client.fetch(bannerQuery)

   return {
      props: {
         banner,
         products
      }
   }
}

export default Product