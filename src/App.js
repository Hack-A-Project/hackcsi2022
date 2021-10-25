import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <FAQ />
      <Sponsors />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
