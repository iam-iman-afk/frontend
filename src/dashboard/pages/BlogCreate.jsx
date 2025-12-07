import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px;
  direction: rtl;

  input, textarea, select {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  button {
    padding: 12px 20px;
    background: #4F46E5;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default function BlogCreate() {

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
  });

  const [file, setFile] = useState(null);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("description", form.description);
    fd.append("category", form.category);
    if (file) fd.append("thumbnail", file);

  await fetch("https://backend-ucl2.onrender.com/api/v1/blog", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: fd
  });

    window.location.href = "/dashboard/blogs";
  };

  return (
    <Wrapper>
      <h2>ساخت مقاله جدید</h2>

      <form onSubmit={submit}>
        <input
          name="title"
          placeholder="عنوان"
          onChange={change}
        />

        <textarea
          name="description"
          rows="5"
          placeholder="توضیحات"
          onChange={change}
        ></textarea>

        <input
          name="category"
          placeholder="دسته‌بندی"
          onChange={change}
        />

        <label>کاور:</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button>ساخت</button>
      </form>
    </Wrapper>
  );
}