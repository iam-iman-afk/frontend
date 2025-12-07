import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

/* ===================== STYLES ===================== */

const Section = styled.section`
  padding: 120px 40px;
  direction: rtl;
  background: ${({ $dark }) => ($dark ? "#050505" : "#fafafa")};
  transition: 0.3s;

  @media (max-width: 900px) {
    padding: 90px 20px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 12px;
  color: ${({ $dark }) => ($dark ? "#fff" : "#111")};
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 16px;
  opacity: 0.8;
  margin-bottom: 45px;
  color: ${({ $dark }) => ($dark ? "#ccc" : "#666")};
`;

const Grid = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ $dark }) =>
    $dark ? "rgba(255,255,255,0.05)" : "#fff"};
  border-radius: 22px;
  overflow: hidden;

  box-shadow: ${({ $dark }) =>
    $dark
      ? "0 14px 50px rgba(0,0,0,0.7)"
      : "0 14px 50px rgba(0,0,0,0.08)"};

  transition: 0.35s ease;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: 0.3s;

    @media (max-width: 650px) {
      height: 180px;
    }
  }

  .content {
    padding: 22px;

    h3 {
      font-size: 20px;
      font-weight: 800;
      color: ${({ $dark }) => ($dark ? "#fff" : "#111")};
      margin-bottom: 10px;
    }

    p {
      color: ${({ $dark }) => ($dark ? "#bbb" : "#555")};
      font-size: 15px;
      line-height: 1.7;
      margin-bottom: 15px;
    }

    .date {
      font-size: 13px;
      opacity: 0.6;
      margin-bottom: 18px;
      color: ${({ $dark }) => ($dark ? "#aaa" : "#666")};
    }

    a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      cursor: pointer;
      color: ${({ theme }) => theme.primary};
      font-weight: 700;
      transition: 0.3s;

      &:hover {
        gap: 12px;
      }
    }
  }
`;

/* ===================== COMPONENT ===================== */

export default function Articles({ dark }) {
  const posts = [
    {
      img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=900&q=70",
      title: "10 نکته مهم برای طراحی UI مدرن",
      date: "1403/10/10",
      text: "در این مقاله جدیدترین ترندهای طراحی UI در سال 2025 را بررسی می‌کنیم.",
      link: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=70",
      title: "چطور سرعت وب‌سایت خود را 3 برابر کنیم؟",
      date: "1403/09/28",
      text: "روش‌های حرفه‌ای برای افزایش سرعت و بهینه‌سازی وب‌سایت.",
      link: "#",
    },
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=70",
      title: "چرا سئو مهم‌ترین عامل رشد کسب‌وکار است؟",
      date: "1403/09/02",
      text: "اگر سئو را جدی نگیرید، عملاً در اینترنت دیده نخواهید شد.",
      link: "#",
    },
  ];

  return (
    <Section id="articles" $dark={dark}>
      <Title $dark={dark}>مقالات</Title>
      <Subtitle $dark={dark}>آخرین مطالب آموزشی و نکات کاربردی</Subtitle>

      <Grid>
        {posts.map((p, i) => (
          <Card key={i} $dark={dark} data-aos="fade-up" data-aos-delay={i * 150}>
            <img src={p.img} alt={p.title} loading="lazy" />

            <div className="content">
              <h3>{p.title}</h3>
              <div className="date">{p.date}</div>
              <p>{p.text}</p>

              <a href={p.link}>
                <FaArrowLeft /> ادامه مطلب
              </a>
            </div>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}