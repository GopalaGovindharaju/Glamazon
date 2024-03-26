import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ThreeDtry from './components/ThreeDtry';
import Lab from './labcomponents/Lab';
import Filter from './labcomponents/Filter';
import FilterBeard from './labcomponents/FilterBeard';
import FilterEyebrow from './labcomponents/FilterEyebrow';
import FilterLipcolor from './labcomponents/FilterLipcolor';
import StyledItems from './labcomponents/StyledItems';
import StyledItemsBeard from './labcomponents/Beard/StyledItemsBeard';
import StyledItemsEyeBrow from './labcomponents/EyeBrow/StyledItemsEyeBrow';
import StyledItemsLip from './labcomponents/LipColor/StyledItemsLip';
import Choice from './labcomponents/Choice/Choice';




function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/lab" element={<Lab />} >
          <Route index element={<StyledItems/>} />
          <Route path='Hairstyle' element={<StyledItems/>} />
          <Route path='BeardMoustache' element={<StyledItemsBeard/>} />
          <Route path='Eyebrow' element={<StyledItemsEyeBrow/>} />
          <Route path='Lipcolor' element={<StyledItemsLip/>} />
          <Route path='Choice' element ={<Choice/>}/>
        </Route>       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
