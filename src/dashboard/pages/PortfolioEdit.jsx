import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px;
  direction: rtl;

  h2 {
    margin-bottom: 20px;
  }

  input, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }

  textarea {
    min-height: 150px;
  }

  button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #4F46E5;
    color: #fff;
    font-size: 15px;
  }

  .current-img {
    margin-bottom: 15px;

    img {
      width: 250px;
      border-radius: 10px;
    }
  }
`;

export default function PortfolioEdit() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    cover: ""
  });

  const [newCover, setNewCover] = useState(null);

  // دریافت اطلاعات نمونه‌کار
  const loadPortfolio = async () => {
    const res = await fetch(`https://backend-ucl2.onrender.com/api/v1/portfolio/${slug}`);
    const data = await res.json();

    setForm({
      title: data.title,
      category: data.category,
      description: data.description,
      cover: data.cover,
    });
  };

  useEffect(() => {
    loadPortfolio();
  }, []);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updatePortfolio = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("category", form.category);
    fd.append("description", form.description);

    if (newCover) fd.append("cover", newCover);

    const res = await fetch(`https://backend-ucl2.onrender.com/api/v1/portfolio/${slug}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: fd,
    });

    if (res.ok) {
      alert("نمونه‌کار با موفقیت ویرایش شد");
      navigate("/dashboard/portfolio");
    } else {
      alert("خطا در ویرایش نمونه‌کار");
    }
  };

  return (
    <Wrapper>
      <h2>ویرایش نمونه‌کار</h2>

      {form.cover && (
        <div className="current-img">
          <p>تصویر فعلی:</p>
          <img src={`https://backend-ucl2.onrender.com/api/v1/${form.cover}`} alt="" />
        </div>
      )}

      <form onSubmit={updatePortfolio}>
        <input
          name="title"
          value={form.title}
          onChange={change}
          placeholder="عنوان نمونه‌کار"
        />

        <input
          name="category"
          value={form.category}
          onChange={change}
          placeholder="دسته‌بندی"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={change}
          placeholder="توضیحات"
        />

        <label>تصویر جدید:</label>
        <input type="file" onChange={(e) => setNewCover(e.target.files[0])} />

        <button>ذخیره تغییرات</button>
      </form>
    </Wrapper>
  );
}