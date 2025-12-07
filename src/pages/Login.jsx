// apps/web/src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginApi({ email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "ورود ناموفق بود");
    }
  };

  return (
    <main
      style={{
        paddingTop: "120px",           // فاصله از Navbar
        minHeight: "calc(100vh - 120px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "#f9fafb",
        direction: "rtl",
      }}
    >
      <div
        className="login-container"
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#fff",
          padding: "32px 28px",
          borderRadius: 16,
          boxShadow: "0 18px 45px rgba(15, 23, 42, 0.12)",
        }}
      >
        <h2
          style={{
            fontSize: 24,
            fontWeight: 800,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          ورود به پنل مدیریت
        </h2>

        {error && (
          <p
            className="error"
            style={{
              background: "#fee2e2",
              color: "#b91c1c",
              padding: "8px 12px",
              borderRadius: 8,
              fontSize: 14,
              marginBottom: 16,
            }}
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
          <div style={{ display: "grid", gap: 6 }}>
            <label style={{ fontSize: 14, fontWeight: 600 }}>ایمیل</label>
            <input
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid #d4d4d8",
                fontSize: 14,
                outline: "none",
              }}
            />
          </div>

          <div style={{ display: "grid", gap: 6 }}>
            <label style={{ fontSize: 14, fontWeight: 600 }}>رمز عبور</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid #d4d4d8",
                fontSize: 14,
                outline: "none",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: 10,
              padding: "10px 12px",
              borderRadius: 999,
              border: "none",
              background:
                "linear-gradient(135deg, #facc15 0%, #f97316 45%, #a855f7 100%)",
              color: "#111827",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            ورود
          </button>
        </form>
      </div>
    </main>
  );
}