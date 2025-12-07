// src/App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./dashboard/Dashboard"; // مسیر درست
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Articles from "./components/Articles";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

import useScrollReveal from "./utils/ScrollReveal";

/* ---------------- صفحات داخلی ---------------- */

function HomePage({ dark }) {
  return (
    <>
      <HeroSlider dark={dark} />
      <Services dark={dark} />
      <WhyUs dark={dark} />
      <Portfolio dark={dark} />
      <ContactCTA dark={dark} />
      <Footer dark={dark} />
    </>
  );
}

function ContactPage({ dark }) {
  return (
    <>
      <div style={{ paddingTop: 90 }} />
      <ContactCTA dark={dark} />
      <Footer dark={dark} />
    </>
  );
}

function AboutPage({ dark }) {
  return (
    <>
      <div style={{ paddingTop: 90 }} />
      <About dark={dark} />
      <WhyUs dark={dark} />
      <Footer dark={dark} />
    </>
  );
}

function PricingPage({ dark }) {
  return (
    <>
      <div style={{ paddingTop: 90 }} />
      <Pricing dark={dark} />
      <Footer dark={dark} />
    </>
  );
}

function ArticlesPage({ dark }) {
  return (
    <>
      <div style={{ paddingTop: 90 }} />
      <Articles dark={dark} />
      <Footer dark={dark} />
    </>
  );
}

function PortfolioPage({ dark }) {
  return (
    <>
      <div style={{ paddingTop: 90 }} />
      <Portfolio dark={dark} />
      <Footer dark={dark} />
    </>
  );
}

function ServicesPage({ dark }) {
  return (
    <>
      <div style={{ paddingTop: 90 }} />
      <Services dark={dark} />
      <Footer dark={dark} />
    </>
  );
}

function FAQPage({ dark }) {
  return (
    <>
      <div style={{ paddingTop: 90 }} />
      <section style={{ padding: "80px 24px 60px", direction: "rtl" }}>
        <h1 style={{ fontSize: 28, fontWeight: 800 }}>سؤالات متداول</h1>
      </section>
      <Footer dark={dark} />
    </>
  );
}

/* ------------------ خود App ------------------ */

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  useScrollReveal();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />

      {/* Router اینجا نباید باشد */}

      <Navbar dark={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<HomePage dark={darkMode} />} />
        <Route path="/contact" element={<ContactPage dark={darkMode} />} />
        <Route path="/about" element={<AboutPage dark={darkMode} />} />
        <Route path="/pricing" element={<PricingPage dark={darkMode} />} />
        <Route path="/articles" element={<ArticlesPage dark={darkMode} />} />
        <Route path="/portfolio" element={<PortfolioPage dark={darkMode} />} />
        <Route path="/services" element={<ServicesPage dark={darkMode} />} />
        <Route path="/faq" element={<FAQPage dark={darkMode} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;