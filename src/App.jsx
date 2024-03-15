import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Vedio from "./Components/Vedio";
import Faq from "./Components/Faq";
import Download from "./Components/Download";
import Singers from "./Components/Singers";
import Sound from "./Components/Sound";
import Led from "./Components/Led";
// import StarsCanvas from "./Components/StarAnimation";
// import Header from "./Components/Header";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 10,
    });
  });

  return (
    <div>
      {/* <StarsCanvas /> */}
      <Navbar />
      <Hero />
      <Singers />
      <Sound />
      <Led />
      <Vedio />
      <About />
      <Download />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
