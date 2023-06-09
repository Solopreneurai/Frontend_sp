import FAQ from "../components/Home/FAQ";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Home/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <FAQ />
    </div>
  );
}
