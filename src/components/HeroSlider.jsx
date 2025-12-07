// src/components/HeroSlider.jsx
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import hero1 from "../assets/images/hero.jpg";
import hero2 from "../assets/images/hero2.avif";
import hero3 from "../assets/images/hero3.jpg";

/* ---------------------- Mesh Animation ---------------------- */
const moveMesh = keyframes`
  0% { transform: translate(-20px, -20px) scale(1); }
  50% { transform: translate(20px, 10px) scale(1.15); }
  100% { transform: translate(-20px, -20px) scale(1); }
`;

/* ---------------------- Wrapper ---------------------- */
const Hero = styled.section`
  width: 100%;
  height: calc(100vh - 90px);
  padding-top: 90px;
  position: relative;
  overflow: hidden;

  @media (max-width: 800px) {
    height: 70vh;
    padding-top: 70px;
  }

  .swiper,
  .swiper-slide {
    height: 100%;
  }

  /* Mesh Gradient */
  .mesh {
    position: absolute;
    top: -120px;
    right: -120px;
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, #ff6a3d77, #ffb84c44, transparent);
    filter: blur(95px);
    animation: ${moveMesh} 9s infinite ease-in-out alternate;
    z-index: 1;
    pointer-events: none;
  }
`;

/* Wave as styled component تا رنگش از theme بیاد */
const Wave = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  z-index: 3;

  svg {
    width: 100%;
    height: 90px;
  }

  path {
    fill: ${({ theme }) => theme.body};
  }

  @media (max-width: 800px) {
    svg {
      height: 70px;
    }
  }
`;

/* ---------------------- Slide ---------------------- */
const Slide = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(p) => p.$bg}) center/cover no-repeat;
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.32);
    z-index: 2;
  }
`;

/* ---------------------- Text Content ---------------------- */
const Content = styled.div`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 6%;
  transform: translateY(-50%);
  color: #fff;
  max-width: 680px;

  @media (max-width: 900px) {
    max-width: 520px;
  }

  @media (max-width: 650px) {
    left: 6%;
    right: 6%;
    max-width: none;
  }

  h1 {
    font-size: 54px;
    font-weight: 900;
    letter-spacing: -1px;
    line-height: 1.1;
    color: #fff;

    @media (max-width: 900px) {
      font-size: 42px;
    }
    @media (max-width: 650px) {
      font-size: 32px;
    }

    span {
      display: inline-block;
      opacity: 0;
      transform: translateY(35px) scale(0.98);
      filter: blur(6px);
      animation: textPop 0.8s forwards cubic-bezier(.25,.46,.45,1);

      @keyframes textPop {
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }
      }
    }

    span:nth-child(2) { animation-delay: 0.08s; }
    span:nth-child(3) { animation-delay: 0.16s; }
    span:nth-child(4) { animation-delay: 0.24s; }
    span:nth-child(5) { animation-delay: 0.32s; }
  }

  p {
    margin-top: 14px;
    font-size: 18px;
    max-width: 520px;
    opacity: 0.9;
    line-height: 1.6;

    @media (max-width: 650px) {
      font-size: 16px;
    }
  }

  .btn-group {
    margin-top: 28px;
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }
`;

/* ---------------------- Buttons ---------------------- */
const Button = styled(Link)`
  padding: 12px 28px;
  font-size: 15px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
  backdrop-filter: blur(10px);

  ${({ $type }) =>
    $type === "primary"
      ? `
    background: rgba(255, 106, 61, 0.9);
    color: #fff;
    box-shadow: 0 14px 30px rgba(255, 106, 61, 0.4);
  `
      : `
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.4);
    color: #fff;
  `}

  &:hover {
    transform: translateY(-4px);
    opacity: 0.95;
  }
`;

/* ====================================================== */

export default function HeroSlider() {
  const slides = [
    {
      bg: hero1,
      title: "ساخت وب‌سایت‌های فوق‌حرفه‌ای",
      text: "طراحی‌های مدرن، سرعت بالا و رابط کاربری ممتاز برای برند شما.",
    },
    {
      bg: hero2,
      title: "راه‌حل‌های دیجیتال قدرتمند",
      text: "از طراحی تا توسعه، سئو و برندینگ — تیم ما همراه شماست.",
    },
    {
      bg: hero3,
      title: "سطح جدیدی از تجربه کاربری",
      text: "انیمیشن‌های دقیق و طراحی تمیز با آخرین تکنولوژی‌های روز.",
    },
  ];

  return (
    <Hero>
      <div className="mesh" />

      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        loop
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        effect="fade"
        speed={1100}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <Slide $bg={s.bg}>
              <Content>
                <h1>
                  {s.title.split(" ").map((w, idx) => (
                    <span key={idx}>{w} </span>
                  ))}
                </h1>

                <p>{s.text}</p>

                <div className="btn-group">
                  <Button to="/contact" $type="primary">
                    شروع کنید
                  </Button>
                  <Button to="/portfolio">مشاهده نمونه‌کارها</Button>
                  <Button to="/pricing">تعرفه‌ها</Button>
                </div>
              </Content>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>


    </Hero>
  );
}