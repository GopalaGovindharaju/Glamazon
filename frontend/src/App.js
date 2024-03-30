import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Lab from './labcomponents/Lab';
import StyledItems from './labcomponents/StyledItems';
import StyledItemsEyeBrow from './labcomponents/EyeBrow/StyledItemsEyeBrow';
import StyledItemsLip from './labcomponents/LipColor/StyledItemsLip';
import ChoiceStyleditems from './labcomponents/Choice/ChoiceStyleditems';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/lab" element={<Lab />} >
          <Route index element={<ChoiceStyleditems/>} />
          <Route path='Hairstyle' element={<StyledItems/>} />
          <Route path='Eyebrow' element={<StyledItemsEyeBrow/>} />
          <Route path='Lipcolor' element={<StyledItemsLip/>} />
          <Route path='Choice' element ={<ChoiceStyleditems/>}/>
        </Route>       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
