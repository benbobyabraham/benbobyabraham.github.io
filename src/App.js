import logo from './logo.svg';
import './App.css';
import LinkedinBadge from './components/LinkedinBadge';



function App() {
  return (
    <div className="App">
      <nav><h3>
      Ben Boby Senior Data Scientist - NTT Data
      </h3> 
      </nav>
      <header className="App-header">
        <div style={{display:'flex'}}>
          <a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/ben-boby-3ba0a8144?trk=profile-badge" target="_blank" rel="noreferrer">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <LinkedinBadge/>
        </div>
      </header>
      <footer>
        <nav>
          <h6>
            Was too bored to build the rest of it....
          </h6>
        </nav>
      </footer>
    </div>
  );
}

export default App;
