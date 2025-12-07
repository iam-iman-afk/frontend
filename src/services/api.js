const BASE_URL = "https://backend-ucl2.onrender.com/api/v1";

/* ---------------------- Auth APIs ---------------------- */

export async function loginApi(payload) {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({}));
      throw new Error(error.message || "خطای ورود");
    }

    return await res.json();
  } catch (err) {
    console.error("Login API Error:", err);
    throw err;
  }
}

/* ---------------------- Orders APIs ---------------------- */

export async function getOrders() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "خطا در دریافت سفارش‌ها");
  }

  return await res.json();
}

export async function deleteOrder(id) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/orders/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "خطا در حذف سفارش");
  }

  return true;
}

export async function updateOrder(id, data) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/orders/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "خطا در بروزرسانی سفارش");
  }

  return await res.json();
}