import { useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* ===================== STYLES ===================== */

const Section = styled.section`
  padding: 100px 40px;
  background: ${({ $dark }) => ($dark ? "#0a0a0a" : "#fafafa")};
  direction: rtl;
  transition: 0.3s ease;

  @media (max-width: 900px) {
    padding: 70px 20px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 55px;
  color: ${({ $dark }) => ($dark ? "#fff" : "#111")};
`;

const Grid = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ $dark }) =>
    $dark ? "rgba(255,255,255,0.04)" : "#ffffff"};
  border-radius: 22px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${({ $dark }) =>
    $dark
      ? "0 12px 35px rgba(0,0,0,0.7)"
      : "0 12px 32px rgba(0,0,0,0.08)"};
  transition: 0.35s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
  }

  .imgBox {
    height: 220px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.35s ease;
    }
  }

  &:hover img {
    transform: scale(1.06);
  }

  .content {
    padding: 22px 20px;

    h4 {
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 6px;
      color: ${({ $dark }) => ($dark ? "#fff" : "#111")};
    }

    p {
      font-size: 14px;
      opacity: 0.75;
      color: ${({ $dark }) => ($dark ? "#ccc" : "#777")};
    }
  }
`;

/* ============ MODAL ============ */

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.78);
  backdrop-filter: blur(6px);
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: fadeIn 0.35s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 600px) {
    backdrop-filter: blur(2px);
  }
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 950px;
  height: 90vh;
  background: ${({ $dark }) => ($dark ? "#111" : "#fff")};
  border-radius: 22px;
  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;

  animation: scaleIn 0.35s ease;

  @keyframes scaleIn {
    from { transform: scale(0.88); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  left: 14px;
  width: 38px;
  height: 38px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(6px);
  color: white;
  border-radius: 50%;
  cursor: pointer;
  font-size: 22px;
  border: none;
  z-index: 20;

  transition: 0.25s;

  &:hover {
    background: rgba(255,255,255,0.25);
  }
`;

const ModalContent = styled.div`
  padding: 18px 24px;

  h3 {
    font-size: 26px;
    font-weight: 900;
    margin-bottom: 10px;
    color: ${({ $dark }) => ($dark ? "#fff" : "#111")};
  }

  p {
    font-size: 15px;
    opacity: 0.85;
    line-height: 1.9;
    color: ${({ $dark }) => ($dark ? "#ccc" : "#444")};
  }
`;

/* ====================== COMPONENT ====================== */

export default function Portfolio({ dark }) {
  const projects = [
    {
      title: "وب‌سایت فروشگاهی مدرن",
      cat: "E-Commerce Website",
      desc: "طراحی و توسعه یک فروشگاه مدرن، سریع، امنیتی و کاربرپسند.",
      images: [
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1000&q=70",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&q=70",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1000&q=70",
      ],
    },
    {
      title: "صفحه فرود حرفه‌ای",
      cat: "Landing Page",
      desc: "صفحه لندینگ با نرخ تبدیل بالا و طراحی مدرن.",
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=70",
        "https://images.unsplash.com/photo-1551650992-ee39f8a4f87b?w=1000&q=70",
      ],
    },
    {
      title: "سایت شرکتی خلاقانه",
      cat: "Corporate Website",
      desc: "معرفی کامل شرکت، خدمات، تیم و نمونه‌کارها با طراحی زیبا.",
      images: [
        "https://images.unsplash.com/photo-1502880704435-c43f0de0d0ac?w=1000&q=70",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&q=70",
      ],
    },
  ];

  const [open, setOpen] = useState(false);
  const [project, setProject] = useState(null);

  const openModal = (p) => {
    setProject(p);
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpen(false);
    setProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <Section id="portfolio" $dark={dark}>
      <Title $dark={dark}>نمونه‌کارهای ما</Title>

      <Grid>
        {projects.map((p, i) => (
          <Card
            key={i}
            $dark={dark}
            data-aos="fade-up"
            data-aos-delay={i * 140}
            onClick={() => openModal(p)}
          >
            <div className="imgBox">
              <img src={p.images[0]} alt={p.title} loading="lazy" />
            </div>

            <div className="content">
              <h4>{p.title}</h4>
              <p>{p.cat}</p>
            </div>
          </Card>
        ))}
      </Grid>

      {open && project && (
        <Backdrop onClick={closeModal}>
          <ModalBox $dark={dark} onClick={(e) => e.stopPropagation()}>
            <CloseBtn onClick={closeModal}>×</CloseBtn>

            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              style={{
                width: "100%",
                height: "60vh",
              }}
            >
              {project.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    loading="lazy"
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <ModalContent $dark={dark}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </ModalContent>
          </ModalBox>
        </Backdrop>
      )}
    </Section>
  );
}