import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  padding: 30px;
  direction: rtl;

  input, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border-radius: 10px;
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

export default function PortfolioCreate() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    client: "",
    websiteLink: "",
    tags: ""
  });

  const [cover, setCover] = useState(null);
  const [gallery, setGallery] = useState([]);

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const fd = new FormData();

    // append normal fields
    fd.append("title", form.title);
    fd.append("description", form.description);
    fd.append("category", form.category);
    fd.append("client", form.client);
    fd.append("websiteLink", form.websiteLink);

    // tags must be an array in backend
    fd.append("tags", JSON.stringify(form.tags.split(",")));

    // cover
    if (cover) fd.append("cover", cover);

    // gallery (multiple)
    Array.from(gallery).forEach((img) => fd.append("gallery", img));

    const res = await fetch("https://backend-ucl2.onrender.com/api/v1/portfolio", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: fd
    });

    if (res.ok) {
      window.location.href = "/dashboard/portfolio";
    } else {
      alert("خطا در ثبت پروژه");
    }
  };

  return (
    <Wrapper>
      <h2>پروژه جدید</h2>

      <form onSubmit={submit}>
        <input name="title" placeholder="عنوان" onChange={change} />
        <textarea name="description" rows="5" placeholder="توضیحات" onChange={change} />
        <input name="category" placeholder="دسته" onChange={change} />
        <input name="client" placeholder="نام مشتری" onChange={change} />
        <input name="websiteLink" placeholder="لینک پروژه" onChange={change} />
        <input name="tags" placeholder="تگ‌ها (جدا با ,)" onChange={change} />

        <label>کاور:</label>
        <input type="file" onChange={(e) => setCover(e.target.files[0])} />

        <label>گالری:</label>
        <input
          type="file"
          multiple
          onChange={(e) => setGallery(e.target.files)}
        />

        <button>ثبت پروژه</button>
      </form>
    </Wrapper>
  );
}