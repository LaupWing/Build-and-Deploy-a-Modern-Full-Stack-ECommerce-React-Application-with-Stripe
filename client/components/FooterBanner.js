const FooterBanner = ({footerBanner:{
   discount,
   largeText1,
   largeText2,
   saleTime,
   smallText,
   midText,
   desc,
   product,
   buttonText,
   image
}}) =>{
   return (
      <div className="footer-banner-container">
         <div className="banner-desc">
            <div className="left">
               <p>{discount}</p>
               <h3>{largeText1}</h3>
               <h3>{largeText2}</h3>
               <p>{saleTime}</p>
            </div>
            <div className="right"></div>
         </div>
      </div>
   )
}

export default FooterBanner