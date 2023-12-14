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

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 10,
    });
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <Singers />
      <Vedio />
      <About />
      <Download />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
