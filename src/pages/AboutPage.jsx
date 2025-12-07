import Navbar from "../components/Navbar";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 90 }} />
      
      <About />
      <WhyUs />
      <Footer />
    </>
  );
}