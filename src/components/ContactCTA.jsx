import styled from "styled-components";

/* ===================== SECTION WITH MESH + WAVE ===================== */

const Section = styled.section`
  position: relative;
  padding: 120px 40px 150px;
  direction: rtl;
  overflow: hidden;
  background: ${({ $dark }) =>
    $dark
      ? "radial-gradient(circle at top right, #ffb84c33, #000)"
      : "radial-gradient(circle at top right, #ff6a3d22, #fafafa)"};
  transition: 0.3s ease;

  @media (max-width: 900px) {
    padding: 100px 20px 130px;
  }

  /* Mesh background blobs */
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 480px;
    height: 480px;
    background: radial-gradient(circle, #ff6a3d, transparent 65%);
    filter: blur(100px);
    opacity: 0.35;
    z-index: 0;

    @media (max-width: 600px) {
      filter: blur(60px); /* Mobile Optimization */
      opacity: 0.28;
    }
  }

  &::before {
    top: -150px;
    right: -150px;
  }

  &::after {
    bottom: -150px;
    left: -150px;
  }
`;

/* ===== Wave Divider at Bottom ===== */

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    width: 100%;
    height: 100px;

    path {
      fill: ${({ $dark }) => ($dark ? "#0a0a0a" : "#fff")};
    }
  }
`;

/* ===================== CONTENT GRID ===================== */

const Wrapper = styled.div`
  position: relative;
  z-index: 10;

  max-width: 1300px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

/* ===================== TEXT BOX (Glass) ===================== */

const TextBox = styled.div`
  background: ${({ $dark }) =>
    $dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.55)"};
  backdrop-filter: blur(18px);
  padding: 45px 40px;
  border-radius: 26px;

  box-shadow: ${({ $dark }) =>
    $dark
      ? "0 20px 55px rgba(0,0,0,0.7)"
      : "0 20px 55px rgba(0,0,0,0.12)"};

  @media (max-width: 900px) {
    padding: 30px 20px;
  }

  h2 {
    font-size: 40px;
    font-weight: 900;
    color: ${({ $dark }) => ($dark ? "#fff" : "#111")};
    line-height: 1.4;

    @media (max-width: 900px) {
      font-size: 30px;
    }
  }

  p {
    margin-top: 14px;
    font-size: 16px;
    opacity: 0.85;
    color: ${({ $dark }) => ($dark ? "#ccc" : "#444")};
    line-height: 1.9;
  }
`;

/* ===================== FORM BOX ===================== */

const FormBox = styled.form`
  background: ${({ $dark }) =>
    $dark ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.9)"};
  backdrop-filter: blur(15px);

  padding: 40px 35px;
  border-radius: 26px;

  box-shadow: ${({ $dark }) =>
    $dark
      ? "0 20px 55px rgba(0,0,0,0.8)"
      : "0 20px 55px rgba(0,0,0,0.15)"};

  display: flex;
  flex-direction: column;
  gap: 18px;
  z-index: 15;

  @media (max-width: 900px) {
    padding: 30px 20px;
  }

  input,
  textarea {
    width: 100%;
    padding: 14px 16px;
    border-radius: 14px;
    border: none;
    outline: none;
    font-size: 15px;
    resize: none;

    background: ${({ $dark }) =>
      $dark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.65)"};

    color: ${({ $dark }) => ($dark ? "#fff" : "#222")};
    backdrop-filter: blur(10px);
  }

  textarea {
    height: 120px;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 16px 30px;
  font-size: 17px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  border-radius: 14px;
  color: white;

  background: linear-gradient(135deg, #ff6a3d, #ffb84c);
  box-shadow: 0 10px 25px rgba(255,110,50,0.35);

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 15px 35px rgba(255,110,50,0.45);
  }
`;

/* ===================== COMPONENT ===================== */

export default function ContactCTA({ dark }) {
  return (
    <Section id="contact" $dark={dark}>
      <Wrapper>

        {/* Text Side */}
        <TextBox $dark={dark} data-aos="fade-left">
          <h2>یک قدم تا ساخت وب‌سایت رویایی شما باقیست!</h2>
          <p>
            فرم زیر را پر کن تا با هم صحبت کنیم و یک مشاوره رایگان برای پروژه‌ات داشته باشیم.
          </p>
        </TextBox>

        {/* Form Side */}
        <FormBox $dark={dark} autoComplete="off" data-aos="fade-right">
          <input type="text" placeholder="نام شما" required />
          <input type="email" placeholder="ایمیل" required />
          <input type="tel" placeholder="شماره تماس" required />
          <textarea placeholder="توضیحات پروژه"></textarea>

          <Button type="submit">ارسال درخواست</Button>
        </FormBox>

      </Wrapper>

      {/* Wave Shape */}
      <Wave $dark={dark}>
        <svg viewBox="0 0 1440 100">
          <path d="M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z"></path>
        </svg>
      </Wave>
    </Section>
  );
}