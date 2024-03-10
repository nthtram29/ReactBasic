
import './App.css';
import Companies from './component/Companies/Companies';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import GetStarted from './component/GetStarted/GetStarted';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import Residencies from './component/Residencies/Residencies';
import Value from './component/Value/Value';


function App() {
  return (
    <div className="App">
     <div>
      <div className='white-gradient'></div>
      <Header />
      <Hero />
     </div>
     <Companies />
     <Residencies />
     <Value />
     <Contact />
     <GetStarted />
     <Footer />
    </div>
  );
}

export default App;
