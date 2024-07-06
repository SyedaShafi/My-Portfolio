import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Preloader></Preloader>
  ) : (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <SocialLinks></SocialLinks>
      <Footer></Footer>
    </>
  );
}

export default App;
