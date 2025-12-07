import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 30px;
  direction: rtl;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 25px;

  th, td {
    padding: 12px;
    border-bottom: 1px solid #eee;
    text-align: right;
  }

  img {
    width: 80px;
    height: 60px;
    object-fit: cover;
    border-radius: 6px;
  }

  button {
    padding: 6px 12px;
    border: none;
    background: crimson;
    color: white;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export default function BlogList() {

  const [posts, setPosts] = useState([]);

  const load = async () => {
    const res = await fetch("http://localhost:4000/api/v1/blogs");
    const data = await res.json();
    setPosts(data);
  };

  const del = async (slug) => {
    if (!window.confirm("حذف شود؟")) return;

    const token = localStorage.getItem("token");

    const res = await fetch(`https://backend-ucl2.onrender.com/api/v1/blog/${slug}`, {
  method: "DELETE",
  headers: { Authorization: `Bearer ${token}` }
});

    if (res.ok) {
      load();
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Wrapper>
      <h2>مدیریت مقالات</h2>

      <Link to="/dashboard/blogs/new">
        <button style={{ marginTop: 20, background: "#4F46E5" }}>
          ساخت مقاله جدید
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
          {posts.map((p) => (
            <tr key={p.slug}>
              <td>
                <img src={p.thumbnail} alt={p.title} />
              </td>
              <td>{p.title}</td>
              <td>{p.category}</td>
              <td>
                <Link to={`/dashboard/blogs/edit/${p.slug}`}>
                  <button style={{ background: "#777", marginLeft: 10 }}>
                    ویرایش
                  </button>
                </Link>

                <button onClick={() => del(p.slug)}>حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}