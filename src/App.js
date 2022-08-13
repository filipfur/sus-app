import logo from './logo.svg';
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="sus-logo.png" className="App-logo" alt="logo" />
        <p>
          Svenska Spelutvecklingssällskapet - 2022.
        </p>
        <a className="App-link" href="#section0">
          Läs mer
        </a>
      </header>
      <div className="App-body">
        <div className="App-post">
          <h1><a name="section0">Om oss</a></h1>
          <p>Svenska Spelutvecklingssällskapet (<b>SUS</b>) är en ideell förening för alla som är nyfikna på eller redan är aktiva inom spelutveckling. Vi riktar oss till glada amatörer såväl som branschledande industriproffs.</p>
          <img className="picture" src="nuke.png"/>
          <p>Vi håller till på discord. Ingen medlemsansökan krävs utan det är bara att följa inbjudningslänken.</p>
          <div className="social-handle">
          <SocialIcon url="https://discord.gg/uvKHeBqF"/> <a className="App-link" href="https://discord.gg/uvKHeBqF">https://discord.gg/uvKHeBqF</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
