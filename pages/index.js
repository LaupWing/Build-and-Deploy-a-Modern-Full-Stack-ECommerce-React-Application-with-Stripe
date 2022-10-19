import FooterBanner from "../components/FooterBanner"
import HeroBanner from "../components/HeroBanner"
import { client } from "../lib/client"

const Home = ({products, banner})=>{
   return (
      <>
         {console.log(banner)}
         {/* <HeroBanner
            banner={banner}
            smallText="Small Text"
            midText="Mid Text"
            largeText="Large Text"
            image="https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg"
            product="product"
            buttonText="Button text"
         />  */}
         <div className="products-heading">
            <h2>Best selling products</h2>
            <p>Speakers of many variations</p>
         </div>

         <div className="products-container">
            {products?.map(product=>product.name)}
         </div>
         {/* <FooterBanner/> */}
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