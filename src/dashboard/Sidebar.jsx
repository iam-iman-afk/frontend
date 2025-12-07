import styled from "styled-components";

const Wrapper = styled.div`
  width: 250px;
  background: ${({ dark }) => (dark ? "#111" : "#fff")};
  color: ${({ dark }) => (dark ? "#fff" : "#111")};
  height: 100vh;
  border-left: 1px solid ${({ dark }) => (dark ? "#222" : "#ddd")};
  padding: 30px 20px;
  transition: 0.3s;

  @media (max-width: 900px) {
    position: fixed;
    right: 0;
    top: 0;
    width: 70%;
    transform: translateX(100%);
    z-index: 9999;
  }
`;

const Item = styled.div`
  margin: 15px 0;
  padding: 12px 15px;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.2s;

  &:hover {
    background: ${({ dark }) =>
      dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"};
  }
`;

export default function Sidebar({ dark }) {
  return (
    <Wrapper dark={dark}>
      <h2>Creatizone Admin</h2>

      <Item dark={dark}>داشبورد</Item>
      <Item dark={dark}>کاربران</Item>
      <Item dark={dark}>سفارش‌ها</Item>
      <Item dark={dark}>مقالات</Item>
      <Item dark={dark}>نمونه‌کارها</Item>
      <Item dark={dark}>تنظیمات</Item>
    </Wrapper>
  );
}