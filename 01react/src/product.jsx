import React from "react";
function Product({name, price}){

  
  return(<div>
    <h2>{name}</h2>
   {price > 100 ?(<p>This product is expensive</p>):(<p>This product is affordable</p>)
   }
   
  </div>);
}export default Product;