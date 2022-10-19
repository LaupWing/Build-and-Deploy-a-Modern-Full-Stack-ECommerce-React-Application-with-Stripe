import Link from "next/link"

const Product = ({
   product:{
      image,
      name,
      slug,
      price
   }
}) =>{
   return (
      <div>
         <Link href={`/product/${slug.current}`}>
            <div className="product-card">
               
            </div>
         </Link>
      </div>
   )
}

export default Product