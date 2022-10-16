import FooterBanner from "../components/FooterBanner"
import HeroBanner from "../components/HeroBanner"

const Home = ()=>{
   return (
      <>
         <HeroBanner/> 
         <div className="products-heading">
            <h2>Best selling products</h2>
            <p>Speakers of many variations</p>
         </div>

         <div className="products-container">
            {["Product 1", "Product 2"].map(product=>product)}
         </div>
         <FooterBanner/>
      </>
   )
}

export default Home