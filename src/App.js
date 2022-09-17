import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header> {/*  className="App-header">        
        <div className="Row-markup">
          <h1 className="Page-title">Наша продукция</h1>
          <div className="Summary-order"> 
            <p>3 товара</p>
            <p>На сумму 3500р</p>
          </div>
          <img src={order} className="Order-icon" alt="order" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  
        */}
        <Header orderItems="3" orderPrice="3600" />
      </header>
    </div>
  );
}

export default App;
