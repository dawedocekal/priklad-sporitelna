import { Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage/homepage';
import Confirmation from './pages/confirmation/confirmation';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} /> 
      <Route path="/potvrzeni" element={<Confirmation />} /> 
    </Routes>
  );
}

export default App;
