import './App.css';
import concept from './concepts.json'
import Header from './components/Header';
import Concept from './components/Concept';
import Card from './components/Card.tsx'

function App() {
  const cards = ['Toilet paper', 'Soap', 'Shampoo','hhhhh'];
  return (
    <div >
      <Header />
      <ul>
        <Concept name ={concept[0].name} 
          description={concept[0].description}/>
          <Concept name ={concept[1].name} 
          description={concept[1].description}/>
      </ul>
      <div className='space-y-4'>
        {cards.map((card, index)=>(
         <Card key={index} title={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
