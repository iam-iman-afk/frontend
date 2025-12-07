import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaFacebookF, FaGlobe, FaEnvelope } from "react-icons/fa";

/* ===================== WRAPPER ===================== */

const FooterWrapper = styled.footer`
  position: relative;
  padding: 120px 40px 40px;
  direction: rtl;

  background: ${({ $dark }) =>
    $dark
      ? "radial-gradient(circle at top left, #111 0%, #000 100%)"
      : "radial-gradient(circle at top left, #ffffff 0%, #f3f3f3 100%)"};

  transition: 0.3s ease;

  @media (max-width: 900px) {
    padding: 100px 20px 40px;
  }
`;

/* ===================== WAVE TOP ===================== */

const WaveTop = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;

  svg {
    display: block;
    width: 100%;
    height: 90px;

    path {
      fill: ${({ $dark }) => ($dark ? "#0a0a0a" : "#fff")};
    }
  }
`;

/* ===================== GRID ===================== */

const Grid = styled.div`
  max-width: 1350px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr 1fr;
  gap: 50px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

/* ===================== COL ===================== */

const Col = styled.div`
  h3 {
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 20px;
    color: ${({ $dark }) => ($dark ? "#fff" : "#111")};
  }

  p {
    font-size: 15px;
    line-height: 1.8;
    color: ${({ $dark }) => ($dark ? "#aaa" : "#555")};
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 15px;
      margin-bottom: 12px;
      color: ${({ $dark }) => ($dark ? "#ccc" : "#444")};
      position: relative;
      width: fit-content;
      cursor: pointer;
      transition: 0.25s;

      display: flex;
      align-items: center;
      gap: 6px;

      &:hover {
        color: ${({ theme }) => theme.primary};
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        right: 0;
        width: 0;
        height: 2px;
        background: ${({ theme }) => theme.primary};
        transition: 0.3s;
      }

      &:hover::after {
        width: 100%;
      }

      @media (max-width: 700px) {
        margin: 10px auto;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`;

/* ===================== SOCIALS ===================== */

const Socials = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 16px;

  @media (max-width: 700px) {
    justify-content: center;
  }

  a {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: ${({ $dark }) =>
      $dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)"};

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    color: ${({ $dark }) => ($dark ? "#ddd" : "#444")};
    cursor: pointer;

    transition: 0.3s ease;

    &:hover {
      transform: translateY(-4px) scale(1.05);
      color: ${({ theme }) => theme.primary};
      background: ${({ $dark }) =>
        $dark ? "rgba(255,255,255,0.1)" : "rgba(255,150,80,0.12)"};
    }
  }
`;

/* ===================== NEWSLETTER ===================== */

const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  p {
    font-size: 15px;
    color: ${({ $dark }) => ($dark ? "#bbb" : "#555")};
  }

  input {
    padding: 14px 16px;
    border-radius: 14px;
    border: none;
    outline: none;

    background: ${({ $dark }) =>
      $dark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.9)"};
    color: ${({ $dark }) => ($dark ? "#fff" : "#222")};

    font-size: 15px;
  }

  button {
    padding: 12px 20px;
    border-radius: 14px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    color: white;
    background: linear-gradient(135deg, #ff6a3d, #ffb84c);
    box-shadow: 0 8px 25px rgba(255,110,50,0.35);
    transition: 0.25s;

    &:hover {
      transform: translateY(-3px) scale(1.03);
      box-shadow: 0 12px 35px rgba(255,110,50,0.45);
    }
  }

  @media (max-width: 700px) {
    align-items: center;
  }
`;

/* ===================== COPYRIGHT ===================== */

const Copy = styled.div`
  margin-top: 60px;
  text-align: center;
  padding-top: 25px;
  font-size: 14px;

  color: ${({ $dark }) => ($dark ? "#888" : "#555")};
  border-top: 1px solid ${({ $dark }) => ($dark ? "#222" : "#ddd")};
`;

/* ===================== COMPONENT ===================== */

export default function Footer({ dark }) {
  return (
    <FooterWrapper $dark={dark}>
      <WaveTop $dark={dark}>
        <svg viewBox="0 0 1440 100">
          <path d="M0,80 C360,0 1080,120 1440,40 L1440,0 L0,0 Z"></path>
        </svg>
      </WaveTop>

      <Grid>
        <Col $dark={dark}>
          <h3>ایمان‌وب</h3>
          <p>طراحی و توسعه وب‌سایت‌های مدرن، سریع و حرفه‌ای.</p>
          <Socials $dark={dark}>
            <a href="#"><FaGlobe /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </Socials>
        </Col>

        <Col $dark={dark}>
          <h3>لینک‌ها</h3>
          <ul>
            <li><a href="#about">درباره ما</a></li>
            <li><a href="#services">خدمات</a></li>
            <li><a href="#portfolio">نمونه‌کارها</a></li>
            <li><a href="#why">چرا ما</a></li>
            <li><a href="#contact">تماس با ما</a></li>
          </ul>
        </Col>

        <Col $dark={dark}>
          <h3>ارتباط با ما</h3>
          <ul>
            <li><FaEnvelope /> info@creatizone.com</li>
            <li>۰۹۱۲۳۴۵۶۷۸۹</li>
            <li>تهران – ایران</li>
          </ul>
        </Col>

        <Col $dark={dark}>
          <h3>عضویت در خبرنامه</h3>
          <Newsletter $dark={dark}>
            <p>ایمیل خود را وارد کنید</p>
            <input type="email" placeholder="ایمیل شما..." required />
            <button>عضویت</button>
          </Newsletter>
        </Col>
      </Grid>

      <Copy $dark={dark}>
        © {new Date().getFullYear()} ساخته‌شده با ❤️ توسط <strong>Creatizone</strong>.
      </Copy>
    </FooterWrapper>
  );
}