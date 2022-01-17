
import './App.css';
import Header from './Components/Header';
import Schedule from './Components/Schedule';

function App() {
  return (
    <div className="App">
      <h1 className='text-center header'>EWU Course Planner</h1>
      <Header/>
      <div style={{"marginBottom":"200px"}} className='my-4'>
      <Schedule/>
      </div>
      <h2>sdd</h2>
      
    </div>
  );
}

export default App;
