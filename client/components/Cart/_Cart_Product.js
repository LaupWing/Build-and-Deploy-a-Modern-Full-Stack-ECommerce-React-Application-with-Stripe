import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartProduct = ({product}) => {
   return (  
      <div className="product">
         <img 
            src={product.image[0]}
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
            </div>
         </div>
      </div>
   )
}
 
export default CartProduct;