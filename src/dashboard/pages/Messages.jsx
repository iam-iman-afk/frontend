import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px;
  direction: rtl;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 25px;
  background: ${({ dark }) => (dark ? "#111" : "#fff")};
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(0,0,0,0.08);

  th, td {
    padding: 12px 14px;
    border-bottom: 1px solid #eee;
    text-align: right;
    font-size: 14px;
  }

  th {
    background: ${({ dark }) => (dark ? "#161616" : "#f7f7f7")};
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const Status = styled.span`
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  color: #fff;
  background: ${({ st }) => (st === "new" ? "#f59e0b" : "#10b981")};
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;

  button {
    border: none;
    border-radius: 8px;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 12px;
    color: #fff;
  }
`;

const MessageBox = styled.div`
  margin-top: 18px;
  font-size: 13px;
  color: ${({ dark }) => (dark ? "#eee" : "#444")};
  line-height: 1.8;
`;

export default function Messages({ dark }) {
  const [list, setList] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  const token = localStorage.getItem("token");

  const load = async () => {
    const res = await fetch("https://backend-ucl2.onrender.com/api/v1/messages", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    setList(data);
  };

  const markRead = async (id) => {
    await fetch(`https://backend-ucl2.onrender.com/api/v1/messages/${id}/read`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
    });

    load();
  };

  const del = async (id) => {
    if (!window.confirm("این پیام حذف شود؟")) return;

    await fetch(`https://backend-ucl2.onrender.com/api/v1/messages/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Wrapper>
      <h2>پیام‌های تماس</h2>

      <Table dark={dark}>
        <thead>
          <tr>
            <th>نام</th>
            <th>ایمیل</th>
            <th>موضوع</th>
            <th>وضعیت</th>
            <th>تاریخ</th>
            <th>اقدامات</th>
          </tr>
        </thead>

        <tbody>
          {list.map((m) => (
            <tr key={m._id}>
              <td>{m.name}</td>
              <td>{m.email || "-"}</td>
              <td>{m.subject || "-"}</td>

              <td>
                <Status st={m.status}>
                  {m.status === "new" ? "جدید" : "خوانده شده"}
                </Status>
              </td>

              <td>{new Date(m.createdAt).toLocaleDateString("fa-IR")}</td>

              <td>
                <Actions>
                  <button
                    style={{ background: "#4b5563" }}
                    onClick={() =>
                      setExpandedId(expandedId === m._id ? null : m._id)
                    }
                  >
                    مشاهده
                  </button>

                  {m.status === "new" && (
                    <button
                      style={{ background: "#10b981" }}
                      onClick={() => markRead(m._id)}
                    >
                      علامت خوانده‌شده
                    </button>
                  )}

                  <button
                    style={{ background: "#ef4444" }}
                    onClick={() => del(m._id)}
                  >
                    حذف
                  </button>
                </Actions>

                {expandedId === m._id && (
                  <MessageBox dark={dark}>{m.message}</MessageBox>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}