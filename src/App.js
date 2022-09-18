import './App.css';
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
        <Header orderItems="3" orderPrice="3600" />
        <Cards />
    </div>
  );
}

export default App;
