import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import { Route,Routes } from 'react-router';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Search from "./pages/Search";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SelectFile from './components/SelectFile';
import DiseaseInfo from './components/DiseaseInfo';

function App() {
  return (
    <div className='relative'>

  <div className='w-100% h-full relative z-10'>
  <Routes>
    <Route path = "/" element={<Home/>} />
    <Route path = "/About" element={<About/>}/>
    <Route path = "/Contact" element = {<Contact/>} />
    <Route path = "/Search" element = {<Search/>} />
    <Route path = "/Login" element = {<Login/>}/>
    <Route path = "/SignUp" element = {<SignUp/>} />
    <Route path='/selectFile' element={<SelectFile/>} />
    <Route path='/diseaseInfo' element={<DiseaseInfo />} />
  </Routes>
  </div>
    </div>


  );
}

export default App;
