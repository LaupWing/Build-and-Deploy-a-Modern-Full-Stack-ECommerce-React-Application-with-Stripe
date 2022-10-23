import React from 'react'
import { urlFor } from '../../lib/client'

const Product = ({product, products}) => {
   console.log(product)
   console.log(products)
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

export const getStaticProps = async ({
   params:{
      slug
   }
})=>{
   const productQuery = `*[_type == 'product' && slug.current == ${slug}][0]`
   const product = await client.fetch(productQuery)

   const productsQuery = "*[_type == 'product']"
   const products = await client.fetch(productsQuery)

   return {
      props: {
         product,
         products
      }
   }
}

export default Product