import Bag from "./Bag";
import Apples from "./Apples";
import Pears from "./Pears";
import Card from "./Card";
import Btn from "./Btn";
import ModeToggler from "./ModeToggler";
import RandomNumber from "./RandomNumber";

function App(){

  return (
    <div className="App">
      <Btn />
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
      
    
      <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
      </Bag>

      <ModeToggler />
      <RandomNumber />

       </div>
  );
}

export default App;