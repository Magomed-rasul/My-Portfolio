import "./App.css";
import About from "./components/About/About";
import Bio from "./components/Bio/Bio";
import Example from "./components/Example/Example";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Bio />
      <Example />
      <About />
      <Experience />
    </div>
  );
}

export default App;
