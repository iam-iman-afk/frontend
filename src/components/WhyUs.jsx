import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

/* ===================== STYLES ===================== */

const Section = styled.section`
  padding: 100px 40px;
  direction: rtl;
  background: ${({ theme }) => theme.body};
  transition: 0.3s ease;

  @media (max-width: 900px) {
    padding: 70px 20px;
  }
`;

const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
`;

const Text = styled.div`
  h2 {
    font-size: 36px;
    font-weight: 900;
    margin-bottom: 18px;
    color: ${({ theme }) => theme.text};
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    opacity: 0.85;
    line-height: 1.9;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 25px;

    li {
      font-size: 16px;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      font-weight: 500;
      color: ${({ theme }) => theme.text};

      @media (max-width: 900px) {
        justify-content: center;
      }

      svg {
        color: ${({ theme }) => theme.primary};
        font-size: 20px;
        margin-left: 10px;
      }
    }
  }
`;

const ImgBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 22px;

  box-shadow: ${({ theme }) =>
    theme.mode === "dark"
      ? "0 18px 45px rgba(0,0,0,0.8)"
      : "0 18px 45px rgba(0,0,0,0.15)"};

  transition: 0.3s ease;

  img {
    width: 100%;
    display: block;
    transition: 0.4s ease;
    object-fit: cover;
  }

  &:hover img {
    transform: scale(1.06);
    opacity: 0.95;
  }
`;

/* ===================== COMPONENT ===================== */

export default function WhyUs() {
  const reasons = [
    "تیم متخصص و با تجربه",
    "کیفیت بالا و طراحی مدرن",
    "پشتیبانی سریع و دائمی",
    "قیمت مناسب و منصفانه",
  ];

  return (
    <Section id="whyus">
      <Wrapper>

        <Text data-aos="fade-right">
          <h2>چرا ما را انتخاب کنید؟</h2>

          <p>
            ما تجربه، خلاقیت و استانداردهای فنی لازم را برای ساخت یک وب‌سایت 
            حرفه‌ای، سریع و زیبا داریم. تمرکز ما بر کیفیت، تجربه کاربری، 
            و نتیجه واقعی برای کسب‌وکار شماست.
          </p>

          <ul>
            {reasons.map((item, i) => (
              <li key={i}>
                <FaCheckCircle />
                {item}
              </li>
            ))}
          </ul>
        </Text>

        <ImgBox data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093?w=1600"
            alt="why us"
          />
        </ImgBox>

      </Wrapper>
    </Section>
  );
}