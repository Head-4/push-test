import React, { useEffect, useState } from 'react';
import { handleAllowNotification } from './Config.js';

function Notify() {
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

export default Notify;
