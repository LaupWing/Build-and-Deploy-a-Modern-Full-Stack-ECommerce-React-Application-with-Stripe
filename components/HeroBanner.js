import Link from "next/link"

const HeroBanner = ({
   banner:{
      smallText, 
      midText, 
      largeText, 
      image, 
      product, 
      buttonText,
      desc
   }
}) =>{
   return (
      <div className="hero-banner-container">
         <div>
            <p className="beats-solo">{smallText}</p>
            <h3>{midText}</h3>
            <h1>{largeText}</h1>
            <img 
               src={image[0]} 
               alt="headphones" 
               className="hero-banner-image"
            />
            <div>
               <Link href={`/product/${product}`}>
                  <button type="button">{buttonText}</button>
               </Link>
               <div className="desc">
                  <h5>Description</h5>
                  <p>{desc}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroBanner