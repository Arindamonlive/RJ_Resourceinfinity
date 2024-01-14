import logo from './assests/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="RJ Resourceinfinity">
        <img src={logo} className="App-logo " alt="logo" />
        <p>
          Contact for WebDevelopment and WebServices
          <p>Repository Juncture Resourceinfinity</p>
          <p>Arindam Chakraborty</p>
          <p>Contact:- +91-9830410335, arindamckbt@gmail.com</p>
        </p>
        <a
          className="App-link"
          href="https://rjrinfinity.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </a>
      </header>
    </div>
  );
}

export default App;
