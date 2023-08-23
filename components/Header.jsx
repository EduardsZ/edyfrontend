import React, {useState} from "react";
import { ApiUrl } from "../constants";
// import { ApiUrl } from "myconstants";

import axios from "axios";

function Header() {
  function handleCount(count) {
    return setCount(count + 1)
  }

  axios.get(ApiUrl + 'api/TodoItems')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
  const [count, setCount] = useState(0)
  return (
    <header className="App-header">
      <p>Hello Vite + React and todo!</p>
      <p>
        <button className='waves-effect waves-light btn' onClick={() => handleCount(count)}>count is: {count}</button>
      </p>
      <p>{ApiUrl}</p>
    </header>
  )
}

export default Header