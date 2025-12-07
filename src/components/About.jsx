import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

/* ======================== STYLES ======================== */

const Section = styled.section`
  padding: 120px 40px;
  direction: rtl;
  background: ${({ $dark }) => ($dark ? "#080808" : "#f6f6f6")};
  transition: 0.3s ease;

  @media (max-width: 900px) {
    padding: 90px 20px;
  }
`;

const Wrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const ImgWrapper = styled.div`
  position: relative;

  .mesh-bg {
    position: absolute;
    top: -60px;
    right: -60px;
    width: 420px;
    height: 420px;
    z-index: -1;
    background: radial-gradient(
      circle at center,
      #ff6a3d 0%,
      #ffb84c 30%,
      transparent 70%
    );
    filter: blur(80px);
    opacity: ${({ $dark }) => ($dark ? 0.6 : 0.55)};
  }
`;

const ImgBox = styled.div`
  border-radius: 26px;
  overflow: hidden;
  box-shadow: ${({ $dark }) =>
    $dark ? "0 25px 75px rgba(0,0,0,0.9)" : "0 25px 75px rgba(0,0,0,0.15)"};
  transition: 0.4s ease;

  img {
    width: 100%;
    height: auto;
    border-radius: 26px;
    object-fit: cover;
    transition: 0.55s ease;
  }

  &:hover img {
    transform: scale(1.08);
    opacity: 0.93;
  }
`;

const TextCard = styled.div`
  background: ${({ $dark }) =>
    $dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.55)"};
  backdrop-filter: blur(16px);
  padding: 35px 40px;
  border-radius: 26px;

  box-shadow: ${({ $dark }) =>
    $dark ? "0 15px 45px rgba(0,0,0,0.7)" : "0 15px 45px rgba(0,0,0,0.12)"};

  @media (max-width: 900px) {
    padding: 28px 22px;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 900;
  color: ${({ $dark }) => ($dark ? "#fff" : "#111")};
  margin-bottom: 25px;

  span {
    border-right: 3px solid ${({ $dark }) => ($dark ? "#fff" : "#111")};
    padding-right: 6px;
    animation: blink 0.8s infinite;
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }

  @media (max-width: 900px) {
    font-size: 34px;
  }
`;

const Paragraph = styled.p`
  color: ${({ $dark }) => ($dark ? "#ccc" : "#444")};
  line-height: 1.8;
  font-size: 16px;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    font-size: 17px;
    color: ${({ $dark }) => ($dark ? "#ddd" : "#333")};

    @media (max-width: 900px) {
      justify-content: center;
    }

    svg {
      margin-left: 10px;
      color: ${({ theme }) => theme.primary};
      font-size: 22px;
    }
  }
`;

const Counters = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 30px;

  @media (max-width: 900px) {
    justify-content: center;
    gap: 25px;
  }

  .item {
    text-align: center;

    h3 {
      font-size: 34px;
      font-weight: 900;
      color: ${({ theme }) => theme.primary};
    }

    p {
      font-size: 14px;
      opacity: 0.8;
      margin-top: 4px;
      color: ${({ $dark }) => ($dark ? "#aaa" : "#666")};
    }
  }
`;

/* ======================== COMPONENT ======================== */

export default function About({ dark }) {
  const [typed, setTyped] = useState("");
  const text = "درباره ما";

  useEffect(() => {
    let index = 0;
    let timer;

    const type = () => {
      setTyped(text.slice(0, index));
      index++;
      if (index <= text.length) {
        timer = setTimeout(type, 120);
      }
    };

    type();
    return () => clearTimeout(timer);
  }, []);

  const counters = [
    { num: 120, label: "پروژه موفق" },
    { num: 6, label: "سال تجربه" },
    { num: 48, label: "مشتری فعال" },
  ];

  return (
    <Section $dark={dark} id="about">
      <Wrapper>

        <ImgWrapper $dark={dark} data-aos="fade-left">
          <div className="mesh-bg" />
          <ImgBox $dark={dark}>
            <img
              src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a8?w=1600"
              alt="about creatizone"
              loading="lazy"
            />
          </ImgBox>
        </ImgWrapper>

        <TextCard $dark={dark} data-aos="fade-right">
          <Title $dark={dark}>
            {typed}
            <span></span>
          </Title>

          <Paragraph $dark={dark}>
            ما در CreatiZone یک تیم متخصص در طراحی و توسعه وب‌سایت‌های مدرن و سریع هستیم.
            هدف ما ارائه بهترین تجربه دیجیتال برای مشتریان است.
          </Paragraph>

          <Paragraph $dark={dark}>
            از طراحی UI/UX گرفته تا توسعه کامل، بهینه‌سازی و پشتیبانی مداوم،
            همواره در کنار شما هستیم.
          </Paragraph>

          <List $dark={dark}>
            <li><FaCheckCircle /> تجربه بالا و تیم متخصص</li>
            <li><FaCheckCircle /> کیفیت و طراحی مدرن</li>
            <li><FaCheckCircle /> پشتیبانی سریع و همیشگی</li>
          </List>

          <Counters $dark={dark}>
            {counters.map((item, i) => (
              <div className="item" key={i}>
                <h3>{item.num}+</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </Counters>

        </TextCard>

      </Wrapper>
    </Section>
  );
}