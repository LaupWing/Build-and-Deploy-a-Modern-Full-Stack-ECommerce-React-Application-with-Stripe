import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { TiDeleteOutline } from "react-icons/ti"
import { urlFor } from "../../lib/client";

const CartProduct = ({product}) => {
   return (  
      <div className="product">
         <img 
            src={urlFor(product.image[0])}
            className="cart-product-image" 
         />
         <div className="item-desc">
            <div className="flex top">
               <h5>{product.name}</h5>
               <h5>${product.price}</h5>
            </div>
            <div className="flex bottom">
               <div>
                  <p className="quantity-desc">
                     <span 
                        className="minus"
                        onClick={()=>{}}
                     >
                        <AiOutlineMinus/>
                     </span>
                     <span 
                        className="num"
                        onClick={()=>{}}
                     >
                        {product.quantity}
                     </span>
                     <span 
                        className="plus"
                        onClick={()=>{}}
                     >
                        <AiOutlinePlus/>
                     </span>
                  </p>
               </div>
               <button
                  type="button"
                  className="remove-item"
                  onClick={()=>{}}
               >
                  <TiDeleteOutline/>
               </button>
            </div>
         </div>
      </div>
   )
}
 
export default CartProduct;