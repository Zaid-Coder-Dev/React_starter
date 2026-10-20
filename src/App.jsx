import Counter from './exercice_1/Counter';
import MoodSelector from './exercice_2/MoodSelector'
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>TP 3 - state</h1>

      <div className="exercice">
        <h2>Exercice 1 : Counter</h2>
        <Counter />
      </div>

      <div className="exercice">
        <h2>Exercice 2: Moods</h2>
        <MoodSelector/>
      </div>
      
    </div>
  );
}

export default App;