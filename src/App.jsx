import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Vedio from "./Components/Vedio";
import Faq from "./Components/Faq";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Vedio />
      <Faq />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
