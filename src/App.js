import React, { useState } from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

{ /*import Bag from "./Bag";
import Apples from "./Apples";
import Pears from "./Pears";
import Card from "./Card";
import Btn from "./Btn";
import ModeToggler from "./ModeToggler";
import RandomNumber from "./RandomNumber"; */}

function App(){

  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3}
  ]);

    const [count, setCount] = useState(0);
  


  return(
    <div className="App">
      <h1>where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;