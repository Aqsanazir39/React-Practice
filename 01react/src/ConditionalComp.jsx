function Item({name , Isdeliver}){
  
if (Isdeliver) {
        return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name}</li>;
  
}



export default function DeliverItem(){

  return(<>
    <ul>
      <Item Isdeliver={true}
        name= "Pencil"
      />

<Item Isdeliver={false}
        name= "Laptop"
      />
    </ul>
     
  </>);
}