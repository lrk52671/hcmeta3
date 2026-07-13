import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-main text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <div className="wave-separator"></div>
        <Products />
        <div className="wave-separator"></div>
        <About />
        <div className="wave-separator"></div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}