import Home from "./components/Home"
import NavBar from "./components/NavBar"
import SocialLinks from "./components/SocialLinks"
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from "./components/Experience"
import Contact from "./components/Contact"

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Home></Home>
    <About></About>
    <Portfolio></Portfolio>
    <Experience></Experience>
    <Contact></Contact>

    <SocialLinks></SocialLinks>
    </>
  )
}

export default App
