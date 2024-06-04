import React from 'react';




function Profile(props) {
  const { name, age, bio } = props;
  
  return (
    <>

<h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Bio: {bio}</p>
    </>
        
   
  );
}

export default Profile;
