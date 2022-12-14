import './App.css';
import { Header } from './global/Header';
import { Hero } from './Pages/Hero';
import { Section1 } from './Pages/Section1';
import { Section2 } from './Pages/Section2';
import { theme } from './theme'

function App() {
  const palette = theme()
  return (
    <div className="App" style={{color: palette.text.normal, backgroundColor: palette.background.dark}}>
        <Header />
        <Hero />
        <Section1 />
        <Section2 />
    </div>
  );
}

export default App;
