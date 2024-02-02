import './App.css';
import Header from './components/Header';
import Second from './components/second';
import Picture from './components/Third';


function App(props) {
  return (
    <div className="App">
      <Header/>
      <Second/>
      <Picture/>
    </div>
  );
}

export default App;
