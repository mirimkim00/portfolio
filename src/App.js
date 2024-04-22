import './App.css';
import Header from './components/Header';
import About from './components/About';
import Expereinces from './components/Experiences';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Expereinces />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
