import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { TiDeleteOutline } from "react-icons/ti"
import { urlFor } from "../../lib/client";

const CartProduct = ({product, toggleCartItemQuantity, onRemove}) => {
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
                        onClick={()=>{toggleCartItemQuantity(product._id, "dec")}}
                     >
                        <AiOutlineMinus/>
                     </span>
                     <span className="num">
                        {product.quantity}
                     </span>
                     <span 
                        className="plus"
                        onClick={()=>{toggleCartItemQuantity(product._id, "inc")}}
                     >
                        <AiOutlinePlus/>
                     </span>
                  </p>
               </div>
               <button
                  type="button"
                  className="remove-item"
                  onClick={()=>{onRemove(product)}}
               >
                  <TiDeleteOutline/>
               </button>
            </div>
         </div>
      </div>
   )
}
 
export default CartProduct;