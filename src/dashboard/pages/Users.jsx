import styled from "styled-components";
import { useEffect, useState } from "react";


const BASE_URL = "https://backend-ucl2.onrender.com/api/v1";

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

  button {
    padding: 6px 12px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background: crimson;
    color: #fff;
  }
`;

const AddBox = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  margin-bottom: 35px;

  input, select {
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
  }

  button {
    background: #4F46E5;
  }
`;

export default function Users() {
  const token = localStorage.getItem("token");

  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "viewer"
  });

  const load = async () => {
    const res = await fetch(`${BASE_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) {
      console.error("Failed to load users");
      return;
    }

    setUsers(await res.json());
  };

  const submit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      setForm({ name: "", email: "", password: "", role: "viewer" });
      load();
    } else {
      alert("خطا در ایجاد کاربر");
    }
  };

  const del = async (id) => {
    if (!window.confirm("حذف شود؟")) return;

    const res = await fetch(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });

    if (res.ok) {
      load();
    } else {
      alert("خطا در حذف کاربر");
    }
  };

  useEffect(() => {
    load();
  }, []);

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Wrapper>
      <h2>مدیریت کاربران</h2>

      <AddBox>
        <h3 style={{ marginBottom: 15 }}>افزودن کاربر جدید</h3>

        <form onSubmit={submit}>
          <input
            name="name"
            placeholder="نام"
            value={form.name}
            onChange={change}
          />
          <input
            name="email"
            placeholder="ایمیل"
            value={form.email}
            onChange={change}
          />
          <input
            name="password"
            type="password"
            placeholder="رمز عبور"
            value={form.password}
            onChange={change}
          />

          <select name="role" value={form.role} onChange={change}>
            <option value="viewer">Viewer</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>

          <button>افزودن</button>
        </form>
      </AddBox>

      <Table>
        <thead>
          <tr>
            <th>نام</th>
            <th>ایمیل</th>
            <th>نقش</th>
            <th>حذف</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button onClick={() => del(u._id)}>حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}