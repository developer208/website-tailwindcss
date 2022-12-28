
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer.jsx';
// import Navbar1 from './components/Nav/Navbar1';
function App() {
  return (
   <div>
    <Navbar/>
  <Hero/>
    <Analytics/>
    <Newsletter/>
    <Cards/>
  <Footer/> 
    {/* <Navbar1/>
    <Footer/> */}

   </div>
  );
}

export default App;
