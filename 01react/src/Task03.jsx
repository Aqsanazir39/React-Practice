function Laptop03(props){
  return(
    <div>
      <h2>{props.brand} </h2>
      <p>Price: ${props.price}</p>
      <ul>
        <li>Processor: {props.specs.processor}</li>
        <li>RAM: {props.specs.ram}</li>
        <li>Storage: {props.specs.storage}</li>
      </ul>
    </div>
  );
}
export default Laptop03;