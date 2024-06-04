import React from "react";

function Itemm({name , isPacked}){
  return <li >
    {name}
  </li> 
 
}

export default function PackingList(){

  return(
    <div> <section>
    <h1>sally Packing List </h1>
    <Itemm isPacked = {true}
     name = "Photo"/>

<Itemm isPacked = {false}
     name = "Pencil"/>
  </section></div>
   
  );
}