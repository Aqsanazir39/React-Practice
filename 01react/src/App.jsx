import AssignmentN01 from "./AssignmentN01";
import Profile from "./ProfileComponent";
import Laptop from "./laptopComponent";
import Laptop01 from "./Task2";
import Laptop03 from "./Task03";
import Laptop04 from "./task04";
import Weather from "./temperatureComp";
import Product from "./product";
import ProductList from "./productList";
import Mango from "./mango";
import Ripe from "./mangoList";
function App() {
 
  const profileData = {
      name: "Aqsa Nazir",
      age: 23,
      bio: "I am a student and learning web Development"
  };

  const laptopData = {
    brand: "Hp",
   
    price: 999.99,
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      
    }
  };

  return (
     <>
     <h1>My Profile</h1>
          <Profile name={profileData.name} age={profileData.age} bio={profileData.bio} />
          <hr></hr>
          <h1>Read props inside the child component</h1>
          <Laptop01
      brand={laptopData.brand}
      price={laptopData.price}
      specs={laptopData.specs}
    /><hr></hr>
    <h1>Pass props to the child component</h1>
          <Laptop data={laptopData} />
          <hr></hr>
          <h1>Forwarding props with the JSX spread syntax</h1>
          <Laptop03 {...laptopData}/>
          <hr></hr>
          <h2>Passing JSX as children</h2>
          <Laptop04>
      <h2> Hp </h2>
      <p>Price: $999.99</p>
      <ul>
        <li>Processor: Intel Core i7</li>
        <li>RAM: 16GB</li>
        <li>Storage: 512GB SSD</li>
      </ul>
    </Laptop04>
          <AssignmentN01/>
          <hr></hr>
          <h1>Today's Weather</h1>
      <Weather temperature={36} />
      <hr></hr>
      <Product/>
      <hr></hr>
      <ProductList/>
      <hr></hr>
      <Mango/>
      <Ripe/>
     </>
         
          
   
  );
};

export default App;





