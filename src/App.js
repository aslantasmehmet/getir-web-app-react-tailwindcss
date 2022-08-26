import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import Campaigns from './components/Campaigns';
import Favorites from './components/Favorites';
function App() {
  return (
    <div >
      <Header/>
      <HeroSection/>
      <Categories/>
      <Campaigns/>
      <Favorites/>
      
    </div>
  );
}

export default App;
