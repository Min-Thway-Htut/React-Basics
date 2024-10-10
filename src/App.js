import Heading from "./Heading";
import Bag from "./Bag";
import Apples from "./Apples";
import Pears from "./Pears";

function App(){
  return (
    <div className="App">
      <Heading firstName="Bob" />
      <Heading firstName="Any name other than Bob" />
      <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
      </Bag>
    </div>
  );
}

export default App;