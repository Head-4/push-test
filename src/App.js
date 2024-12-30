import logo from './logo.svg';
import './App.css';
import './Config.js';
import React, { useEffect, useState } from 'react';
import { handleAllowNotification } from './Config.js';

function App() {
  const [token, setToken] = useState(null);

  // useEffect(() =>{
  //   //console.log("handleAllowNotification");
  //   handleAllowNotification(setToken);
  // }, [])

  return (
    <div>
      {token}
      <button onClick={() => handleAllowNotification(setToken)}>알림받기</button>
    </div>
  );
}

export default App;
