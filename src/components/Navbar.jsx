// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: "خانه", link: "/" },
    { title: "خدمات", link: "/services" },
    { title: "نمونه‌کارها", link: "/portfolio" },
    { title: "تعرفه‌ها", link: "/pricing" },
    { title: "مقالات", link: "/articles" },
    { title: "سوالات متداول", link: "/faq" },
    { title: "تماس با ما", link: "/contact" },
    { title: "درباره ما", link: "/about" },
  ];

  /* ---- Close menu on route change ---- */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* ---- Disable scroll when mobile menu is open ---- */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <NavWrapper>
        {/* Logo */}
        <Link to="/" className="left">
          <img src={Logo} className="brand-logo" alt="creatizone logo" />
          <span className="brand-text">CreatiZone</span>
        </Link>

        {/* Desktop Menu */}
        <div className="center">
          {menuItems.map((item, i) => {
            const active = location.pathname === item.link;
            return (
              <Link
                key={i}
                to={item.link}
                className={`nav-item ${active ? "active" : ""}`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span className={`bar ${open ? "open" : ""}`}></span>
          <span className={`bar ${open ? "open" : ""}`}></span>
          <span className={`bar ${open ? "open" : ""}`}></span>
        </div>
      </NavWrapper>

      {/* Mobile Menu */}
      <MobileMenu $open={open}>
        {menuItems.map((item, i) => {
          const active = location.pathname === item.link;
          return (
            <Link
              key={i}
              to={item.link}
              className={`mobile-item ${active ? "active" : ""}`}
            >
              {item.title}
            </Link>
          );
        })}
      </MobileMenu>
    </>
  );
}

/* ============ STYLES ============ */

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 9999;

  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.nav};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme }) => theme.navBorder};

  @media (max-width: 900px) {
    padding: 0 20px;
    backdrop-filter: blur(12px); /* Mobile optimization */
  }

  .left {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .brand-logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
    border-radius: 8px;
  }

  .brand-text {
    font-size: 24px;
    font-weight: 800;
    color: ${({ theme }) => theme.navText};
  }

  .center {
    display: flex;
    gap: 32px;

    @media (max-width: 900px) {
      display: none;
    }
  }

  .nav-item {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.navText};
    padding-bottom: 4px;
    position: relative;
    transition: 0.25s;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      height: 2px;
      width: 0;
      background: ${({ theme }) => theme.primary};
      border-radius: 10px;
      transition: 0.25s;
    }

    &.active::after,
    &:hover::after {
      width: 100%;
    }
  }

  .hamburger {
    width: 30px;
    height: 22px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    @media (max-width: 900px) {
      display: flex;
    }
  }

  .bar {
    height: 3px;
    background: ${({ theme }) => theme.navText};
    border-radius: 6px;
    transition: 0.3s;
  }

  .bar.open:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .bar.open:nth-child(2) {
    opacity: 0;
  }
  .bar.open:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: calc(100vh - 80px);
  z-index: 9998;

  background: ${({ theme }) => theme.body};
  box-shadow: -2px 0 20px rgba(0, 0, 0, 0.15);

  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(100%)")};
  transition: 0.35s ease;

  .mobile-item {
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    transition: 0.25s;

    &.active {
      color: ${({ theme }) => theme.primary};
    }

    &:hover {
      opacity: 0.6;
    }
  }

  @media (min-width: 900px) {
    display: none;
  }
`;