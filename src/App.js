import './App.css';
import Header from './components/Header';
import About from './components/About';
import Expereinces from './components/Experiences';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Expereinces />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
