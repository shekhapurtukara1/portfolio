import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Resume  from './components/Resume';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Home from './components/Home';
function App() {
  
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/*" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
