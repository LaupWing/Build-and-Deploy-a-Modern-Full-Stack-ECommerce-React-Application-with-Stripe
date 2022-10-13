
const Home = ()=>{
   return (
      <>
         Hero Banner 
         <div>
            <h2>Best selling products</h2>
            <p>Speakers of many variations</p>
         </div>

         <div>
            {["Product 1", "Product 2"].map(product=>product)}
         </div>
      </>
   )
}

export default Home