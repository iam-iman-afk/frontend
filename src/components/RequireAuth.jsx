import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RequireAuth({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  let token = null;
  let user = null;

  try {
    token = localStorage.getItem("token");
    user = JSON.parse(localStorage.getItem("user") || "null");
  } catch (err) {
    console.error("Invalid user data in localStorage");
  }

  useEffect(() => {
    // آینده: می‌توانی اعتبارسنجی token را از سرور انجام دهی
    setLoading(false);
  }, []);

  if (loading) return null; // یا Loader سفارشی

  if (!token)
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );

  if (!user || user.role !== "admin")
    return (
      <h2 style={{ padding: 40, textAlign: "center", color: "#e63946" }}>
        403 – دسترسی غیرمجاز ❌
      </h2>
    );

  return children;
}