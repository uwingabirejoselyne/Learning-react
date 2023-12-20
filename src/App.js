import './App.css';
import concept from './concepts.json'
import Header from './components/Header';
import Concept from './components/Concept';

function App() {
  return (
    <div >
      <Header />
      <ul>
        <Concept name ={concept[0].name} 
          description={concept[0].description}/>
          <Concept name ={concept[1].name} 
          description={concept[1].description}/>
      </ul>
    </div>
  );
}

export default App;
