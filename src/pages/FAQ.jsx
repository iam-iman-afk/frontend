import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Section = styled.section`
  padding: 120px 40px 80px;
  direction: rtl;
  background: ${({ $ligh }) => ($ligh ? "#050505" : "#fafafa")};
  transition: 0.3s;

  @media (max-width: 900px) {
    padding: 100px 20px 70px;
  }
`;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 20px;
  color: ${({ $ligh }) => ($ligh ? "#fff" : "#111")};
`;

const Item = styled.div`
  background: ${({ $ligh }) => ($ligh ? "#111" : "#fff")};
  border-radius: 16px;
  padding: 18px 20px;
  margin-bottom: 12px;
  cursor: pointer;
  box-shadow: ${({ $ligh }) =>
    $ligh ? "0 10px 30px rgba(0,0,0,0.7)" : "0 10px 30px rgba(0,0,0,0.06)"};
`;

const Q = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: ${({ $ligh }) => ($ligh ? "#fff" : "#111")};
`;

const A = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: ${({ $ligh }) => ($ligh ? "#ddd" : "#555")};
  line-height: 1.8;
`;

export default function FAQ() {
  const { ligh } = useTheme();

  const faqs = [
    {
      q: "طراحی یک وب‌سایت چقدر زمان می‌برد؟",
      a: "بسته به نوع پروژه، معمولاً بین ۱ تا ۴ هفته زمان نیاز است.",
    },
    {
      q: "آیا بعد از تحویل، پشتیبانی هم می‌دهید؟",
      a: "بله، بسته به نوع قرارداد، پشتیبانی فنی و تغییرات اولیه انجام می‌شود.",
    },
    {
      q: "هزینه طراحی سایت چطور محاسبه می‌شود؟",
      a: "با توجه به امکانات، تعداد صفحات و نوع طراحی، پیشنهاد قیمت ارسال می‌شود.",
    },
  ];

  return (
    <>
      <Navbar />
      <Section >
        <Wrapper>
          <Title >سؤالات متداول</Title>

          {faqs.map((item, i) => (
            <Item key={i} >
              <Q >{item.q}</Q>
              <A >{item.a}</A>
            </Item>
          ))}
        </Wrapper>
      </Section>
      <Footer />
    </>
  );
}