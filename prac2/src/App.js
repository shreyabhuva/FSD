//import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() 
{
  return(
  <div className='wrapper'>
    <h1>Marine Mammals</h1>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}


export default App;