
import './App.css';
import Navbar from './components/Navbar'
import List from './components/List'
import Map from './components/Map'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='section'>
        <List />
        <Map />
      </div>
    </div>
  );
}

export default App;
