import logo from './logo.svg';
import './App.css';
import music1 from './music/music1.mp3'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test Github.io
        </p>
        <audio controls>
          <source src={music1} type="audio/ogg" />
          <source src="horse.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </header>
    </div>
  );
}

export default App;
