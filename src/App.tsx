import { Provider } from "react-redux";
import store from "./store";
import FruitList from "./components/FruitList";
import List from "./components/List";
import VegetableList from "./components/VegetableList";

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-150">
            <List />
          </div>
          <div className="h-150">
            <FruitList />
          </div>
          <div className="h-150">
            <VegetableList />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
