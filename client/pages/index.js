import FooterBanner from "../components/FooterBanner"
import HeroBanner from "../components/HeroBanner"

const Home = ()=>{
   return (
      <>
         <HeroBanner
            smallText="Small Text"
            midText="Mid Text"
            largeText="Large Text"
            image="https://sienaconstruction.com/wp-content/uploads/2017/05/test-image.jpg"
            product="product"
            buttonText="Button text"
         /> 
         <div className="products-heading">
            <h2>Best selling products</h2>
            <p>Speakers of many variations</p>
         </div>

         <div className="products-container">
            {["Product 1", "Product 2"].map(product=>product)}
         </div>
         {/* <FooterBanner/> */}
      </>
   )
}

export default Home