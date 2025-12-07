// src/pages/PricingPage.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";

export default function PricingPage({ dark }) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 90 }} />
      <Pricing dark={dark} />
      <Footer dark={dark} />
    </>
  );
}