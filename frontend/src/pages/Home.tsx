import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import FAQ from "../components/Home/FAQ";
import Features from "../components/Home/Features";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";
import Pricing from "../components/Home/Pricing";
import Working from "../components/Home/Working";

export default function Home() {
  return (
    <div className="page-container">
      <Navbar />
      <Hero />
      <About />
      <Working />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
