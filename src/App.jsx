import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Questions/>
      <Footer/>
    </>
  );
}

export default App;
