import Link from "next/link"
import {AiOutlineShopping} from "react-icons/ai"

const Navbar = () =>{
   return (
      <div className="nav-container">
         <p className="logo">
            <Link href={"/"}>JSM Headphones</Link>
         </p>
         <button
            type="button"
            className="cart-icon"
            onClick={()=>{}}
         >
            <AiOutlineShopping/>
            <span className="cart-item-qty">
               {/* quantities */}
               100
            </span>
         </button>
      </div>
   )
}

export default Navbar