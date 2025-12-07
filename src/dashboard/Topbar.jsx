import styled from "styled-components";

const Bar = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  background: ${({ dark }) => (dark ? "#161616" : "#ffffff")};
  border-bottom: 1px solid ${({ dark }) => (dark ? "#222" : "#ddd")};
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Right = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  span {
    font-size: 22px;
    cursor: pointer;
  }
`;

export default function Topbar({ dark }) {
  return (
    <Bar dark={dark}>
      <h3>پنل مدیریت</h3>

      <Right>
        <span>🔔</span>
        <img
          src="https://i.pravatar.cc/50"
          alt="profile"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
          }}
        />
      </Right>
    </Bar>
  );
}
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "/login";
};<span onClick={logout}>🚪 خروج</span>