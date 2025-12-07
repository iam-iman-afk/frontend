
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Articles from "../components/Articles";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  const { dark } = useTheme();

  return (
    <>
      <Navbar />
      <HeroSlider />
      <Services />
      <WhyUs />
      <Portfolio />
      <Pricing />
      <About />
      <Articles />
      <ContactCTA />
      <Footer />
    </>
  );
}