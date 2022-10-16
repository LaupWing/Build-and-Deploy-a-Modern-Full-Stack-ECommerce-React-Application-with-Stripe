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
         </div>
      </div>
   )
}
 
export default CartProduct;