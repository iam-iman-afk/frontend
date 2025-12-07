import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const BASE_URL = "https://backend-ucl2.onrender.com/api/v1";

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
    min-height: 180px;
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

export default function BlogEdit() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
    image: ""
  });

  const [newImage, setNewImage] = useState(null);

  // دریافت اطلاعات مقاله
  const loadBlog = async () => {
    const res = await fetch(`${BASE_URL}/blogs/${slug}`);
    const data = await res.json();

    setForm({
      title: data.title,
      summary: data.summary,
      content: data.content,
      image: data.image
    });
  };

  useEffect(() => {
    loadBlog();
  }, []);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateBlog = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("summary", form.summary);
    fd.append("content", form.content);

    if (newImage) {
      fd.append("image", newImage);
    }

    const res = await fetch(`${BASE_URL}/blogs/${slug}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: fd,
    });

    if (res.ok) {
      alert("مقاله با موفقیت ویرایش شد");
      navigate("/dashboard/blogs");
    } else {
      alert("خطا در بروزرسانی مقاله");
    }
  };

  return (
    <Wrapper>
      <h2>ویرایش مقاله</h2>

      {form.image && (
        <div className="current-img">
          <p>تصویر فعلی:</p>
          <img src={`https://backend-ucl2.onrender.com/api/v1/${form.image}`} alt="" />
        </div>
      )}

      <form onSubmit={updateBlog}>
        <input
          name="title"
          value={form.title}
          onChange={change}
          placeholder="عنوان"
        />

        <input
          name="summary"
          value={form.summary}
          onChange={change}
          placeholder="خلاصه"
        />

        <textarea
          name="content"
          value={form.content}
          onChange={change}
          placeholder="محتوا"
        />

        <input
          type="file"
          onChange={(e) => setNewImage(e.target.files[0])}
        />

        <button>ذخیره تغییرات</button>
      </form>
    </Wrapper>
  );
}