import logo from './logo.svg';
import './App.css';
import LinkedinBadge from './components/LinkedinBadge';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display:'flex'}}>
          <a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/ben-boby-3ba0a8144?trk=profile-badge">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <LinkedinBadge/>
        </div>
      </header>
    </div>
  );
}

export default App;
