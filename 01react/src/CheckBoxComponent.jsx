import React from "react";
import { useState } from "react";


export default function CheckBoxComponent(){
  const [subjArray, setSubjArray] = useState([]);


const handleChange = (e) =>{
const value = e.target.value;
const checked = e.target.checked;
console.log(value, checked);

if(checked)
  {
setSubjArray([...subjArray, value])
}else{
  setSubjArray(subjArray.filter((e) => (e !== value)));
}


  }
  
 const handleSubmit = (e) => {
  e.preventDefault();
      console.log(subjArray);
    }
  return(
  <>

<div>

  <form onSubmit={handleSubmit}>
    <label>Select Subjects:</label>
    <input type="checkbox" name="subjects" value="Frontend Web Development" onChange={handleChange}/>
    <label> &nbsp; Frontend Web Development</label>
&nbsp;
    <input type="checkbox" name="subjects" value="Backend Web Development" onChange={handleChange}/>
    <label> &nbsp; Backend Web Development</label>
    &nbsp;
    <input type="checkbox" name="subjects" value=" Full Stack Development" onChange={handleChange}/>
    <label> &nbsp; Full Stack Development</label>
    <br></br>
    <button>Show</button>
<div>Subjects: {subjArray} </div>
  </form>
</div>
  </>);

}