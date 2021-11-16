import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Projetos from './components/Projetos';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Projetos/>
      <Footer/>
    </div>
  );
}

export default App;
