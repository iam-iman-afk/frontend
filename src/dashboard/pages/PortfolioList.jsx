import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  padding: 30px;
  direction: rtl;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    text-align: right;
  }

  img {
    width: 90px;
    height: 65px;
    border-radius: 8px;
    object-fit: cover;
  }

  button {
    padding: 6px 12px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    color: white;
  }
`;

export default function PortfolioList() {
  const [data, setData] = useState([]);

  const load = async () => {
    const res = await fetch("https://backend-ucl2.onrender.com/api/v1/portfolio");
    const json = await res.json();
    setData(json);
  };

  const del = async (slug) => {
    if (!window.confirm("حذف شود؟")) return;

    const token = localStorage.getItem("token");

    await fetch(`https://backend-ucl2.onrender.com/api/v1/portfolio/${slug}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });

    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Wrapper>
      <h2>مدیریت نمونه‌کارها</h2>

      <Link to="/dashboard/portfolio/new">
        <button
          style={{
            background: "#4F46E5",
            color: "white",
            marginTop: 20,
            padding: "10px 20px",
            borderRadius: 10
          }}
        >
          افزودن پروژه جدید
        </button>
      </Link>

      <Table>
        <thead>
          <tr>
            <th>کاور</th>
            <th>عنوان</th>
            <th>دسته</th>
            <th>اقدامات</th>
          </tr>
        </thead>

        <tbody>
          {data.map((p) => (
            <tr key={p.slug}>
              <td>
                <img src={`https://backend-ucl2.onrender.com/api/v1/${p.cover}`} />
              </td>

              <td>{p.title}</td>
              <td>{p.category}</td>

              <td>
                <Link to={`/dashboard/portfolio/edit/${p.slug}`}>
                  <button style={{ background: "#777", marginLeft: 8 }}>
                    ویرایش
                  </button>
                </Link>

                <button
                  style={{ background: "crimson" }}
                  onClick={() => del(p.slug)}
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}