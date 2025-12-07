import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: ${({ dark }) =>
    dark ? "rgba(255,255,255,0.05)" : "#fff"};
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 10px 26px rgba(0,0,0,0.06);

  h4 {
    font-size: 15px;
    color: ${({ dark }) => (dark ? "#bbb" : "#666")};
  }

  h2 {
    font-size: 26px;
    margin-top: 10px;
  }
`;

export default function StatsCards({ dark }) {
  return (
    <Grid>
      <Card dark={dark}>
        <h4>کاربران</h4>
        <h2>۱,۲۴۵</h2>
      </Card>
      <Card dark={dark}>
        <h4>سفارش‌ها</h4>
        <h2>۳۴۲</h2>
      </Card>
      <Card dark={dark}>
        <h4>مقالات</h4>
        <h2>۵۹</h2>
      </Card>
      <Card dark={dark}>
        <h4>بازدید امروز</h4>
        <h2>۴,۸۸۰</h2>
      </Card>
    </Grid>
  );
}