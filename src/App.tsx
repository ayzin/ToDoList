
import { Provider } from "react-redux";
import store from "./store";
import FruitList from "./components/FruitList"
import List from "./components/List"
import VegetableList from "./components/VegetableList"

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
