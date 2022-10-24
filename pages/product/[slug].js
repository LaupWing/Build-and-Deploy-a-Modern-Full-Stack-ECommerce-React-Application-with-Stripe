import React from 'react'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai'
import Quantity from '../../components/Quantity'
import Reviews from '../../components/Reviews'
import { client, urlFor } from '../../lib/client'

const Product = ({
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
               <div className="product-details-desc">
                  <h1>{name}</h1>
                  <Reviews/>
                  <h4>Details:</h4>
                  <p>{details}</p>
                  <p className="price">${price}</p>
                  <Quantity/>
                  <div>

                  </div>
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

export default Product