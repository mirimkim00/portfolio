import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Expereinces from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Expereinces />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
