import { useEffect, useState } from "react";
import styled from "styled-components";
import StatCard from "../components/StatCard";

const Wrapper = styled.div`
  padding: 30px;
  direction: rtl;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2,1fr);
  }
`;

const Table = styled.table`
  width: 100%;
  margin-top: 40px;
  background: ${({ dark }) => (dark ? "#111" : "#fff")};
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);

  th, td {
    padding: 14px;
    border-bottom: 1px solid #eee;
  }

  th {
    background: ${({ dark }) => (dark ? "#151515" : "#f7f7f7")};
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export default function Home({ dark }) {
  const [stats, setStats] = useState({
    posts: 0,
    portfolios: 0,
    users: 0,
    orders: 0
  });

  const [orders, setOrders] = useState([]);

  const load = async () => {
    const token = localStorage.getItem("token");

    // ---- Blog ----
    const res1 = await fetch("https://backend-ucl2.onrender.com/api/v1/blogs");
    const posts = await res1.json();

    // ---- Portfolio ----
    const res2 = await fetch("https://backend-ucl2.onrender.com/api/v1/portfolio");
    const pf = await res2.json();

    // ---- Orders ---- (protected)
    const res3 = await fetch("https://backend-ucl2.onrender.com/api/v1/orders", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const od = await res3.json();

    setStats({
      posts: posts.length,
      portfolios: pf.length,
      users: 1, // بعداً API اضافه می‌کنیم
      orders: od.length,
    });

    // آخرین ۵ سفارش
    setOrders(od.slice(-5).reverse());
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Wrapper>
      <h2>داشبورد مدیریتی</h2>

      <Grid>
        <StatCard title="تعداد مقالات" value={stats.posts} dark={dark} />
        <StatCard title="نمونه‌کارها" value={stats.portfolios} dark={dark} />
        <StatCard title="تعداد سفارش‌ها" value={stats.orders} dark={dark} />
        <StatCard title="مدیران" value={stats.users} dark={dark} />
      </Grid>

      <h3 style={{ marginTop: 40 }}>آخرین سفارش‌ها</h3>

      <Table dark={dark}>
        <thead>
          <tr>
            <th>نام مشتری</th>
            <th>نوع پروژه</th>
            <th>تاریخ</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o, i) => (
            <tr key={i}>
              <td>{o.customerName || "-"}</td>
              <td>{o.type || "-"}</td>
              <td>{new Date(o.createdAt).toLocaleDateString("fa-IR")}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}