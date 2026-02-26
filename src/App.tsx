import "./App.css";
import About from "./components/About/About";
import Bio from "./components/Bio/Bio";
import Example from "./components/Example/Example";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Bio />
      <About />
      <Example />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
