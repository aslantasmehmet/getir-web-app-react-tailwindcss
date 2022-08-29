import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import Campaigns from './components/Campaigns';
import Favorites from './components/Favorites';
import MobileApp from './components/MobileApp';
import Card from './components/Card';
import Footer from './components/Footer';


function App() {
  return (
    <div >
      <Header />
      <HeroSection />
      <Categories />
      <div className='bg-gray-50  '>
        <div className='container mx-auto'>
          <Campaigns />
          <Favorites />
          <MobileApp />
          <Card />
        </div>
      </div>
      <Footer />


    </div>
  );
}

export default App;
