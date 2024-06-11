import React from "react";




function Itemm({name , isPacked}){
 
   return(
     <li className="item">
      {name} {isPacked && '✔'}
     </li>
   
    );
 
}

export default function PackingList(){

  return(
    <div> <section>
    <h1>sally Packing List </h1>
    <Itemm isPacked = {true}
     name = "Photo"/>

<Itemm isPacked = {false}
     name = "Pencil"/>

<Itemm isPacked = {false}
     name = "laptop"/>
  </section></div>
   
  );
}
