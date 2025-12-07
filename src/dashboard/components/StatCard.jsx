import styled from "styled-components";

const Box = styled.div`
  background: ${({ dark }) => (dark ? "#111" : "#fff")};
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.07);
  text-align: right;
  direction: rtl;
  transition: .25s;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 45px rgba(0,0,0,0.12);
  }

  h3 {
    font-size: 15px;
    color: #777;
  }

  p {
    font-size: 30px;
    font-weight: 800;
    margin-top: 5px;
  }
`;

export default function StatCard({ title, value, dark }) {
  return (
    <Box dark={dark}>
      <h3>{title}</h3>
      <p>{value}</p>
    </Box>
  );
}