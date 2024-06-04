import React from "react";

function Laptop({data}) {
  const {brand,  price, specs} = data;
  return(
    <div>
      <h2>{brand}</h2>
      <p>Price: ${price}</p>
      <ul>
        <li>Processor: {specs.processor}</li>
        <li>RAM: {specs.ram}</li>
        <li>Storage: {specs.storage}</li>
      </ul>
    </div>
  );
    
  }
export default Laptop;