import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

/* ===================== STYLES ===================== */

const Section = styled.section`
  padding: 120px 40px;
  direction: rtl;
  background: ${({ $dark }) => ($dark ? "#0a0a0a" : "#fafafa")};
  transition: 0.3s ease;

  @media (max-width: 900px) {
    padding: 90px 20px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 15px;
  color: ${({ $dark }) => ($dark ? "#fff" : "#111")};

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 15px;
  opacity: 0.8;
  margin-bottom: 50px;
  color: ${({ $dark }) => ($dark ? "#ccc" : "#666")};
`;

const Grid = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

/* PRICE CARD */

const Card = styled.div`
  padding: 40px 30px;
  border-radius: 26px;
  background: ${({ $dark, $highlight }) =>
    $highlight
      ? $dark
        ? "linear-gradient(135deg, #ffb84c33, #111)"
        : "linear-gradient(135deg, #ffecd7, #fff)"
      : $dark
      ? "rgba(255,255,255,0.05)"
      : "#fff"};

  box-shadow: ${({ $dark, $highlight }) =>
    $highlight
      ? $dark
        ? "0 20px 65px rgba(0,0,0,0.8)"
        : "0 20px 65px rgba(0,0,0,0.12)"
      : $dark
      ? "0 12px 35px rgba(0,0,0,0.7)"
      : "0 12px 35px rgba(0,0,0,0.08)"};

  text-align: center;
  transition: 0.35s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px) scale(${({ $highlight }) => ($highlight ? 1.03 : 1.02)});
  }

  h3 {
    font-size: 26px;
    font-weight: 900;
    color: ${({ $dark }) => ($dark ? "#fff" : "#111")};
  }

  .price {
    margin: 15px 0;
    font-size: 42px;
    font-weight: 900;
    color: ${({ $dark }) => ($dark ? "#ffb84c" : "#ff6a3d")};
  }

  ul {
    padding: 0;
    margin-top: 20px;
    list-style: none;
    text-align: right;

    li {
      font-size: 15px;
      margin-bottom: 10px;
      color: ${({ $dark }) => ($dark ? "#ddd" : "#444")};
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        color: ${({ theme }) => theme.primary};
        font-size: 14px;
        flex-shrink: 0;
      }
    }
  }
`;

const Popular = styled.div`
  position: absolute;
  top: 14px;
  left: -10px;
  background: linear-gradient(135deg, #ff6a3d, #ffb84c);
  padding: 6px 18px;
  font-size: 13px;
  font-weight: 700;
  color: white;
  border-radius: 0 10px 10px 0;
`;

const Button = styled.button`
  margin-top: 25px;
  padding: 14px 32px;
  font-size: 16px;
  color: white;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  background: linear-gradient(135deg, #ff6a3d, #ffb84c);
  box-shadow: 0 10px 25px rgba(255,110,50,0.35);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px) scale(1.04);
    box-shadow: 0 15px 35px rgba(255,110,50,0.45);
  }
`;

/* ===================== DATA ===================== */

const plans = [
  {
    name: "پلن پایه",
    price: "1.9M",
    features: [
      "طراحی ساده و واکنش‌گرا",
      "صفحه اصلی + تماس با ما",
      "بهینه برای موبایل",
      "سرعت معمولی",
    ],
  },
  {
    name: "پلن حرفه‌ای",
    price: "4.9M",
    highlight: true,
    features: [
      "طراحی اختصاصی و مدرن",
      "۵ صفحه کامل",
      "سئو پایه",
      "سرعت و امنیت بالا",
      "فرم تماس پیشرفته",
    ],
  },
  {
    name: "پلن سازمانی",
    price: "توافقی",
    features: [
      "طراحی کاملاً سفارشی",
      "امکانات خاص و پنل مدیریت",
      "امنیت سطح Enterprise",
      "سئو پیشرفته",
      "پشتیبانی VIP",
    ],
  },
];

/* ===================== COMPONENT ===================== */

export default function Pricing({ dark }) {
  return (
    <Section id="pricing" $dark={dark}>
      <Title $dark={dark}>تعرفه‌های خدمات</Title>
      <Subtitle $dark={dark}>پلن مناسب کسب‌وکارت رو انتخاب کن.</Subtitle>

      <Grid>
        {plans.map((p, i) => (
          <Card
            key={p.name}
            $dark={dark}
            $highlight={p.highlight}
            data-aos="fade-up"
            data-aos-delay={i * 120}
          >
            {p.highlight && <Popular>محبوب‌ترین</Popular>}

            <h3>{p.name}</h3>
            <div className="price">{p.price}</div>

            <ul>
              {p.features.map((f, fi) => (
                <li key={fi}>
                  <FaCheck /> {f}
                </li>
              ))}
            </ul>

            <Button type="button">سفارش</Button>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}