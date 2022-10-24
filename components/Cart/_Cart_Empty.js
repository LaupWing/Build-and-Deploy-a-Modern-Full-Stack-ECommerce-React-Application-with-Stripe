import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const CartEmpty = () => {
   return (
      <div className="empty-cart">
         <AiOutlineShopping size={150}/>
         <h3>Your shopping bag is empty</h3>
         <Link href={"/"}>
            <button
               type="button"
               onClick={()=>{}}
               className="btn"
            >
               Continue Shopping
            </button>
         </Link>
      </div>
   )
}
 
export default CartEmpty;