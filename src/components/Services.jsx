import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaLaptopCode, FaRocket, FaCogs } from "react-icons/fa";

/* ====================== STYLES ====================== */

const Section = styled.section`
  padding: 110px 0 90px;
  direction: rtl;
  background: ${({ $dark }) => ($dark ? "#0a0a0a" : "#f8f8f8")};
  transition: 0.3s ease;
`;

const Inner = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
`;

const TitleBox = styled.div`
  text-align: center;
  margin-bottom: 55px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
  color: ${({ $dark }) => ($dark ? "#fff" : "#111")};
`;

const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 15px;
  opacity: 0.8;
  color: ${({ $dark }) => ($dark ? "#ccc" : "#666")};
`;

const TitleUnderline = styled.div`
  width: 100px;
  height: 4px;
  background: ${({ $dark }) => ($dark ? "#ffb84c" : "#ff6a3d")};
  margin: 18px auto 0;
  border-radius: 999px;
  animation: widen 0.7s ease forwards;

  @keyframes widen {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 100px;
      opacity: 1;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

/* CARD */

const Card = styled.div`
  background: ${({ $dark }) =>
    $dark ? "rgba(255,255,255,0.03)" : "#ffffff"};
  border-radius: 26px;
  padding: 40px 26px;
  text-align: center;
  color: ${({ $dark }) => ($dark ? "#eee" : "#333")};
  box-shadow: ${({ $dark }) =>
    $dark
      ? "0 6px 18px rgba(0,0,0,0.6)"
      : "0 6px 18px rgba(0,0,0,0.06)"};
  backdrop-filter: blur(18px);
  cursor: pointer;

  transition: 
    transform 0.35s cubic-bezier(.22,.61,.36,1), 
    box-shadow 0.35s cubic-bezier(.22,.61,.36,1);

  &:hover {
    transform: translateY(-12px) scale(1.04);
    box-shadow: ${({ $dark }) =>
      $dark
        ? "0 18px 45px rgba(255,180,90,0.18)"
        : "0 20px 45px rgba(255,90,30,0.15)"};
  }

  h3 {
    margin-top: 18px;
    font-size: 22px;
    font-weight: 800;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.9;
    opacity: 0.85;
  }
`;

const IconWrap = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 26px;

  background: ${({ $dark }) =>
    $dark
      ? "linear-gradient(135deg, #ffb84c, #ff6a3d)"
      : "linear-gradient(135deg, #ff6a3d, #ffb84c)"};

  box-shadow: ${({ $dark }) =>
    $dark
      ? "0 12px 35px rgba(255,170,60,0.45)"
      : "0 12px 30px rgba(255,106,61,0.35)"};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 36px;
    color: #fff;
  }
`;

/* ====================== COMPONENT ====================== */

export default function Services({ dark }) {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const items = [
    {
      icon: FaLaptopCode,
      title: "طراحی وب‌سایت حرفه‌ای",
      text: "طراحی UI/UX مدرن، ریسپانسیو و سریع برای افزایش نرخ تبدیل.",
    },
    {
      icon: FaCogs,
      title: "توسعه و برنامه‌نویسی",
      text: "کدنویسی امن و استاندارد با جدیدترین تکنولوژی‌ها.",
    },
    {
      icon: FaRocket,
      title: "سئو و رشد ارگانیک",
      text: "بهبود رتبه گوگل و افزایش بازدید واقعی و دائمی.",
    },
  ];

  return (
    <Section $dark={dark} id="services">
      <Inner>
        <TitleBox>
          <Title $dark={dark} data-aos="fade-up">
            خدمات CreatiZone
          </Title>
          <Subtitle $dark={dark} data-aos="fade-up">
            سیستم حرفه‌ای طراحی، توسعه و رشد آنلاین کسب‌وکار شما
          </Subtitle>
          <TitleUnderline $dark={dark} data-aos="fade-up" />
        </TitleBox>

        <Grid>
          {items.map((item, i) => {
            const IconComp = item.icon;

            return (
              <Card $dark={dark} data-aos="fade-up" data-aos-delay={i * 150} key={i}>
                <IconWrap $dark={dark}>
                  <IconComp />
                </IconWrap>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            );
          })}
        </Grid>
      </Inner>
    </Section>
  );
}