import FruitList from "./components/FruitList"
import List from "./components/List"
import VegetableList from "./components/VegetableList"

function App() {
  return (
    <div className="grid grid-cols-3  gap-2">
      <div>
        <List />
      </div>
      <div>
        <FruitList />
      </div>
      <div>
        <VegetableList />
      </div>


    </div>
  )
}

export default App
