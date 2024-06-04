import React from "react";
function OperatorComp({ isLoggedIn, userType }) {
  return (
    <div>
     
      {isLoggedIn && <p>Welcome, user!</p>}

    
      {userType === 'admin' || userType === 'manager' ? (
        <p>You have access to all features.</p>
      ) : (
        <p>use limited features</p>
      )}
    </div>
  );
}
export default OperatorComp;