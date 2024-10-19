import React from "react";
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


  return(
    <div className="App">
      <h1>where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;