import './App.css';
import Navbar from './components/Navbar'
import List from './components/List'
import Map from './components/Map'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className='section'>
                <Map/>
                <List/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
