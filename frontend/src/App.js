import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ThreeDtry from './components/ThreeDtry';
import Lab from './labcomponents/Lab';




function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/lab" element={<Lab />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
