import './App.css';
import concept from './concepts.json'
import Header from './components/Header';

function App() {
  return (
    <div >
      <Header />
      <ul>
        <li>
          <img alt='todo'></img>
          <h2 > {concept[0].name}</h2>
          <h2> {concept[0].description}</h2>

        </li>
      </ul>
    </div>
  );
}

export default App;
