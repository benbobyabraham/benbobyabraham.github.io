import logo from './logo.svg';
import './App.css';
import LinkedinBadge from './components/LinkedinBadge';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display:'flex'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <LinkedinBadge/>
        </div>
      </header>
    </div>
  );
}

export default App;
