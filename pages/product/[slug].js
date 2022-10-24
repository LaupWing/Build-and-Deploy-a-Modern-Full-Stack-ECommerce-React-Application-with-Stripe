import React from 'react'
import ActionButtons from '../../components/ActionButtons'
import Product from '../../components/Product'
import Quantity from '../../components/Quantity'
import Reviews from '../../components/Reviews'
import { client, urlFor } from '../../lib/client'

const ProductDetail = ({
   product:{
      image, 
      name,
      details,
      price
   }, 
   products
}) => {
   return (
      <div>
         <div className="product-detail-container">
            <div>
               <div className="image-container">
                  <img 
                     src={urlFor(image && image[0])} 
                     alt="" 
                  />
               </div>
               {/* <div className="small-images-container">
                  {image?.map((item, i)=>(
                     <img 
                        src={urlFor(item)} 
                        alt="" 
                     />
                  ))}
               </div> */}
               <div className="product-detail-desc">
                  <h1>{name}</h1>
                  <Reviews/>
                  <h4>Details:</h4>
                  <p>{details}</p>
                  <p className="price">${price}</p>
                  <Quantity/>
                  <ActionButtons/>
               </div>
            </div>
         </div>
         <div className="maylike-products-wrapper">
            <h2>You may also like</h2>
            <div className="marquee">
               <div className="maylike-products-container">
                  {products.map((item)=>(
                     <Product/>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export const getStaticPaths = async ({})=>{
   const query = `*[_type == "product"] {
      slug {
         current
      }
   }`
   const products = await client.fetch(query)
   const paths = products.map(product=>({
      params:{
         slug: product.slug.current
      }
   }))

   return {
      paths,
      fallback: "blocking"
   }
}

export const getStaticProps = async ({
   params:{
      slug
   }
})=>{
   const productQuery = `*[_type == 'product' && slug.current == '${slug}'][0]`
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

export default ProductDetail