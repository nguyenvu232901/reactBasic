import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import Login from "./Example/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>helo words </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
        <Login />
      </header>
      <main></main>
      <footer>
        <p>Footer content goes here</p>
      </footer>
    </div>
  );
}

export default App;
