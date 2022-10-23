import FooterBanner from "../components/FooterBanner"
import HeroBanner from "../components/HeroBanner"
import Product from "../components/Product"
import { client } from "../lib/client"

const Home = ({products, banner})=>{
   console.log(banner[0])
   return (
      <>
         <HeroBanner
            banner={banner[0]}
         /> 
         <div className="products-heading">
            <h2>Best selling products</h2>
            <p>Speakers of many variations</p>
         </div>

         <div className="products-container">
            {products?.map(product=><Product 
               key={product._id} 
               product={product}
            />)}
         </div>
         <FooterBanner banner/>
      </>
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
export default Home