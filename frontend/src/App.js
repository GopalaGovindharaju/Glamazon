import './App.css';
import Header from './components/Header';
import Second from './components/second';
import Slider from './components/Slider';




function App(props) {
  return (
    <div className="App">
      <Header/>
      <Second/>
      <Slider/>
    </div>
  );
}

export default App;
