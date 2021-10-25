import "./App.css";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
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
