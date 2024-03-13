import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ThreeDtry from './components/ThreeDtry';
import Lab from './labcomponents/Lab';
import Filter from './labcomponents/Filter';
import FilterBeard from './labcomponents/FilterBeard';
import FilterEyebrow from './labcomponents/FilterEyebrow';
import FilterLipcolor from './labcomponents/FilterLipcolor';




function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/lab" element={<Lab />} >
          <Route index element={<Filter/>} />
          <Route path='Hairstyle' element={<Filter/>} />
          <Route path='BeardMoustache' element={<FilterBeard/>} />
          <Route path='Eyebrow' element={<FilterEyebrow/>} />
          <Route path='Lipcolor' element={<FilterLipcolor/>} />
        </Route>       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
