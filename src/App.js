
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './compo/Home';
import Navbar from './compo/Navbar';
// import ImageSlider from './compo/ImageSlider';

function App() {
  return (
   
      <>
  <BrowserRouter>
  <Navbar/>
  {/* <ImageSlider/> */}
  <Routes>
    <Route path="/" element={<Home />}/>
    
    
  
  </Routes>
  
  </BrowserRouter>



      </>
    
  );
}

export default App;
