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
import DeliverItem from "./ConditionalComp";
import Item from "./ConditionalComp";
import OperatorComp from "./OperatorComp";
import Itemm from "./PractComp";
import PackingList from "./PractComp";
import Button from "./EventComp";

import FunctionClick from "./FunctionClick";
import ToolBar from "./AlertBtn";
import { sculptureList } from "./StateComp";
import { useState } from 'react';
import RadioComponent from "./RadioComponent";
import SelectComponent from "./SelectComponent";
import CheckBoxComponent from "./CheckBoxComponent";
function App() {
 
  const profileData = {
      name: "Aqsa Nazir",
      age: 23,
      bio: "I am a student and learning web Development"
  };

  const laptopData = {
    brand: "Hp",
   
    price: 1000,
    specs: {
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      
    }
  };








 const [index , setIndex] = useState(0)

  function handleClick() {
    setIndex (index + 1);

    if(index === 11){
      setIndex(0);
    }
  
  }

  function handleBack() {
    setIndex (index - 1);

    if(index === 0){
      setIndex(11);
    }
  }
  let sculpture = sculptureList[index];

// Today Practice 06/6/24

  const [selectedRadio, setSelectedRadio] = useState('');

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };
//Select Btn
const [selectedValue , setSelectedValue] = useState('');

const handleSelect = (select) =>{
  setSelectedValue(select.target.value);
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
      <hr></hr>
      <DeliverItem/>
      <hr></hr>
      <OperatorComp userType={'admin'} />
      <hr></hr>
     
      <PackingList/>
      <hr></hr>
      <Button/>
      <hr></hr>

      <hr></hr>
      <FunctionClick/>
      <hr></hr>
      <ToolBar/>

      <button onClick={handleClick}>
        Next
      </button>
      
      <button onClick={handleBack}>
        Back
      </button>
      <hr></hr>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length-1})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>

      <div>
      <hr></hr>
      <RadioComponent handleRadioChange={handleRadioChange} />
      <div id="selected_radio">{selectedRadio}</div>
    </div>
    <hr></hr>
    <SelectComponent handleSelectChange={handleSelect}/>
    <div id="selected_value">{selectedValue}</div>
    <hr></hr>
    <CheckBoxComponent/>
     </>
         
          
   
  );
};

export default App;





